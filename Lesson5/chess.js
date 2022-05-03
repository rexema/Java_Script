
function initCells() {
	let chess = document.querySelector('.chess-div')
	let num = 0;
	const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1];
	const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	for (let i = 0; i < 8; i++) {

		for (let h = 0; h < 8; h++) {
			if (num % 2 == 0) {
				chess.innerHTML += '<div class="chess-cell black-chess"></div>';
			}
			else {
				chess.innerHTML += '<div class="chess-cell"></div>';
			}
			num++;
		}
		num++;
	}

}


initCells();