window.onload = () =>
{ 
	let size = 10; //размер поля
	let bombFrequency = Math.round(Math.pow(size, 2)/6); //частота мин 10*10=100/6 size*size/6/100 = 0,166666;
	let tileSize = 40; //размер ячейки
	let totalCells = Math.pow(size, 2);
	let openCells = 0;
	let totalGames = 0;
	let wins = 0;
	let falls = 0;

	
	const board = document.querySelector('.board');
	let tiles;
	let boardSize;

	const restartBtn = document.querySelector('.minesweeper-btn');
	const endscreen = document.querySelector('.endscreen');

// Настройки
	
	/*const boardSizeBtn = document.getElementById('boardSize');   
	const tileSizeBtn = document.getElementById('tileSize');
	const difficultyBtns = document.querySelectorAll('.difficulty');для доп условия*/
	const flagField = document.getElementById('flags');
	const minesField = document.getElementById('mines');
	const totalCellsDiv = document.getElementById('totalcells');
	const openCellsDiv = document.getElementById('opencells');
	const totalGamesDiv = document.getElementById('totalgames');
	const winsDiv = document.getElementById('wins');
	const fallsDiv = document.getElementById('falls');

	let bombs = [];
	let numbers = [];
	let numberColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d',];
	let endscreenContent = { win: '<span>Ты выиграл</span>', loose: 'Ты проиграл' };
	let flags = 0;
	let gameOver = false;

	const clear = () => {
		gameOver = false;
		bombs = [];
		numbers = [];
		flags = 0;
		openCells = 0;
		endscreen.innerHTML = '';
		endscreen.classList.remove('show');
		tiles.forEach(tile => {
			tile.remove();
		});	
		setup();
	}

	const setup = () => {
		for (let i = 0; i < Math.pow(size, 2); i++) {
			const tile = document.createElement('div');
			tile.classList.add('tile');
			board.appendChild(tile);
			
		}
		totalGames++;
		tiles = document.querySelectorAll('.tile');
		boardSize = Math.sqrt(tiles.length);
		board.style.width = boardSize * tileSize + 'px';
	
		document.documentElement.style.setProperty('--tileSize', `${tileSize}px`);
		document.documentElement.style.setProperty('--boardSize', `${boardSize * tileSize}px`);
	
		let x = 0;
		let y = 0;
		let ii = 0;
		tiles.forEach((tile, i) => {
			tile.setAttribute('data-tile', `${x},${y}`);

			let random_boolean = Math.random()*100 < bombFrequency;
			if (random_boolean) {
				if (ii < bombFrequency) { bombs.push(`${x},${y}`); ii++;}
					if (x > 0) numbers.push(`${x - 1},${y}`);
					if (x < boardSize - 1) numbers.push(`${x + 1},${y}`);
					if (y > 0) numbers.push(`${x},${y - 1}`);
					if (y < boardSize - 1) numbers.push(`${x},${y + 1}`);
					if (x > 0 && y > 0) numbers.push(`${x - 1},${y - 1}`);
					if (x < boardSize - 1 && y < boardSize - 1) numbers.push(`${x + 1},${y + 1}`);
					if (y > 0 && x < boardSize - 1) numbers.push(`${x + 1},${y - 1}`);
					if (x > 0 && y < boardSize - 1) numbers.push(`${x - 1},${y + 1}`);
			}
				
		x++;
		if (x >= boardSize) {
			x = 0;
			y++;
		}
		
		tile.oncontextmenu = function(e) {
			e.preventDefault();
			flag(tile);
		}
		
		tile.addEventListener('click', function(e) {
			clickTile(tile);
		});
			minesField.innerHTML = `Мин на поле: ${bombs.length}`;		
			flagField.innerHTML = `Флагов на поле: ${flags}`;
			totalCellsDiv.innerHTML = `Всего ячеек: ${totalCells}`;
			openCellsDiv.innerHTML = `Открыто ячеек: ${openCells}`;
			totalGamesDiv.innerHTML = `Всего игр: ${totalGames}`;
			winsDiv.innerHTML = `Выиграл: ${wins}`;
			fallsDiv.innerHTML = `Проиграл: ${falls}`;
	});
	
	numbers.forEach(num => {
		let coords = num.split(',');
		let tile = document.querySelectorAll(`[data-tile="${parseInt(coords[0])},${parseInt(coords[1])}"]`)[0];
		let dataNum = parseInt(tile.getAttribute('data-num'));
		if (!dataNum) dataNum = 0;
		tile.setAttribute('data-num', dataNum + 1);
	});
	}

	const flag = (tile) => {
		if (gameOver) return;
		if (!tile.classList.contains('tile--checked')) {
			if (!tile.classList.contains('tile--flagged')) {
				tile.innerHTML = '🚩';
				tile.classList.add('tile--flagged');
				flags++;
			} else {
				tile.innerHTML = '';
				tile.classList.remove('tile--flagged');
				flags--;
			}
		}
		flagField.innerHTML = `Флагов на поле: ${flags}`;
	}

	const clickTile = (tile) => {
		if (gameOver) return;
		if (tile.classList.contains('tile--checked') || tile.classList.contains('tile--flagged')) return;
		let coordinate = tile.getAttribute('data-tile');
		if (bombs.includes(coordinate)) {
			endGame(tile);
		} else {
			let num = tile.getAttribute('data-num');
			if (num != null) {
				openCells++;
				openCellsDiv.innerHTML = `Открыто ячеек: ${openCells}`;
				tile.classList.add('tile--checked');
				tile.innerHTML = num;
				tile.style.color = numberColors[num - 1];
				setTimeout(() => {
					checkVictory();
				}, 100);
				return;
			}
			checkTile(tile, coordinate);
		}
		tile.classList.add('tile--checked');
	}

	const checkTile = (tile, coordinate) => {
		let coords = coordinate.split(',');
		let x = parseInt(coords[0]);
		let y = parseInt(coords[1]);
				openCells++;
				openCellsDiv.innerHTML = `Открыто ячеек: ${openCells}`;
		setTimeout(() => {
			if (x > 0) {
				let targetW = document.querySelectorAll(`[data-tile="${x - 1},${y}"`)[0];
				clickTile(targetW, `${x - 1},${y}`);
			}
			
			if (x < boardSize - 1) {
				let targetE = document.querySelectorAll(`[data-tile="${x + 1},${y}"`)[0];
				clickTile(targetE, `${x + 1},${y}`);
			}
			if (y > 0) {
				let targetN = document.querySelectorAll(`[data-tile="${x},${y - 1}"]`)[0];
				clickTile(targetN, `${x},${y - 1}`);
			}
			
			if (y < boardSize - 1) {
				let targetS = document.querySelectorAll(`[data-tile="${x},${y + 1}"]`)[0];
				clickTile(targetS, `${x},${y + 1}`);
			}
			
			if (x > 0 && y > 0) {
				let targetNW = document.querySelectorAll(`[data-tile="${x - 1},${y - 1}"`)[0];
				clickTile(targetNW, `${x - 1},${y - 1}`);
			}
			if (x < boardSize - 1 && y < boardSize - 1) {
				let targetSE = document.querySelectorAll(`[data-tile="${x + 1},${y + 1}"`)[0];
				clickTile(targetSE, `${x + 1},${y + 1}`);
			}
		
			if (y > 0 && x < boardSize - 1) {
				let targetNE = document.querySelectorAll(`[data-tile="${x + 1},${y - 1}"]`)[0];
				clickTile(targetNE, `${x + 1},${y - 1}`);
			}
			if (x > 0 && y < boardSize - 1) {
				let targetSW = document.querySelectorAll(`[data-tile="${x - 1},${y + 1}"`)[0];
				clickTile(targetSW, `${x - 1},${y + 1}`);
			}
		}, 10);

}


/* Конец игры - взрыв */
	const endGame = (tile) => {
		endscreen.innerHTML = endscreenContent.loose;
		falls++;
		const fallsDiv = document.getElementById('falls');
		endscreen.classList.add('show');
		gameOver = true;
		tiles.forEach(tile => {
			let coordinate = tile.getAttribute('data-tile');
			if (bombs.includes(coordinate)) {
				tile.classList.remove('tile--flagged');
				tile.classList.add('tile--checked', 'tile--bomb');
				tile.innerHTML = '💣';
			}
		});
	}
	
	const checkVictory = () => {
		let win = true;
		tiles.forEach(tile => {
			let coordinate = tile.getAttribute('data-tile');
			if (!tile.classList.contains('tile--checked') && !bombs.includes(coordinate)) win = false;
		});
	
		if (win) {
			endscreen.innerHTML = endscreenContent.win;
			wins++;
			const winsDiv = document.getElementById('wins');
			endscreen.classList.add('show');
			gameOver = true;
		}	
	}
	
/* Начало */
	setup();

/* Новая игра */
	restartBtn.addEventListener('click', function (e) {
		e.preventDefault();
		clear();
	});

}