'use strict';
const catalog = {
    openedImageEl: null,
    settings: {
        previewSelector: 'catalog',
        openedImageWrapperClass: 'catalogWrapper',
        openedImageClass: 'catalogWrapper__image',
        openedImageScreenClass: 'catalogWrapper__screen',
        openedImageCloseBtnClass: 'catalogWrapper__close',
        openedImageCloseBtnSrc: 'images/close.png',
        openedImageNextBtnSrc: 'images/next.png',
        openedImageNextBtnClass: 'catalogWrapper__next',
        openedImageBackBtnSrc: 'images/back.png',
        openedImageBackBtnClass: 'catalogWrapper__back',

    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);
        document.querySelector(this.settings.previewSelector)
            .addEventListener('click', this.containerClickHandler.bind(this));
    },
    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        this.openedImageEl = event.target;
        this.openImage(event.target.dataset.full_image_url);
    },
    openImage(src) {
        const openedImageEl = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
        const img = new Image();
        img.onload = () => openedImageEl.src = src;
        img.src = src;

    },
    getScreenContainer() {
        // Получаем контейнер для открытой картинки.
        const catalogWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        // Если контейнер для открытой картинки существует - возвращаем его.
        if (catalogWrapperElement) {
            return catalogWrapperElement;
        }

        // Возвращаем полученный из метода createScreenContainer контейнер.
        return this.createScreenContainer();
    },

    createScreenContainer() {
        const catalogWrapperElement = document.createElement('div');
        catalogWrapperElement.classList.add(this.settings.openedImageWrapperClass);
        // Добавляем кнопку назад.
        const backBtn = new Image();
        backBtn.classList.add(this.settings.openedImageBackBtnClass);
        backBtn.src = this.settings.openedImageBackBtnSrc;
        catalogWrapperElement.appendChild(backBtn);

        // Добавляем обработчик события при клике, ставим новую открытую картинку и открываем ее.
        backBtn.addEventListener('click', () => {
            this.openedImageEl = this.getPrevImage();
            this.openImage(this.openedImageEl.dataset.full_image_url);
        });

        // Добавляем кнопку вперед.
        const nextBtn = new Image();
        nextBtn.classList.add(this.settings.openedImageNextBtnClass);
        nextBtn.src = this.settings.openedImageNextBtnSrc;
        catalogWrapperElement.appendChild(nextBtn);

        // Добавляем обработчик события при клике, ставим новую открытую картинку и открываем ее.
        nextBtn.addEventListener('click', () => {
            this.openedImageEl = this.getNextImage();
            this.openImage(this.openedImageEl.dataset.full_image_url);
        });
        const catalogScreenElement = document.createElement('div');
        catalogScreenElement.classList.add(this.settings.openedImageScreenClass);
        catalogWrapperElement.appendChild(catalogScreenElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', this.close.bind(this));
        catalogWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        catalogWrapperElement.appendChild(image);

        document.body.appendChild(catalogWrapperElement);
        return catalogWrapperElement;

    },
    getNextImage() {
        // Получаем элемент справа от текущей открытой картинки.
        const nextSibling = this.openedImageEl.nextElementSibling;
        // Если элемент справа есть, его отдаем, если нет, то берем первый элемент в родительском контейнере.
        return nextSibling ? nextSibling : this.openedImageEl.parentElement.firstElementChild;
    },
    getPrevImage() {
        // Получаем элемент слева от текущей открытой картинки.
        const prevSibling = this.openedImageEl.previousElementSibling;
        // Если элемент слева есть, его отдаем, если нет, то берем последний элемент в родительском контейнере.
        if (prevSibling) {
            return prevSibling;
        } else {
            return this.openedImageEl.parentElement.lastElementChild;
        }
    },

    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
};

catalog.init({ previewSelector: '.catalogPreview' });