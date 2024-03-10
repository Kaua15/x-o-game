const spacesRow = document.querySelectorAll('.row div');
const black = document.querySelector('.black');
const title = document.querySelector('.title');
const winspace = document.querySelector('.winspace');
const wintitle = document.querySelector('.winner');
const playAgain = document.querySelector('.winspace button');
let o = '<i class="fa-regular fa-circle"></i>', x = '<i class="fa-solid fa-x"></i>'
let turn = 'x', plays = 0;


spacesRow.forEach((space) => {
    space.addEventListener('click', () => {
        playGameTurn(space);
    });
});

playAgain.addEventListener('click', () => {
    spacesRow.forEach((space) => {
        space.innerHTML = '';
        winspace.classList.add('none');
        black.classList.remove('up');

    });
    for (let i = 0; i <= spacesRow.length; i++) {
        spacesRow[i].id = i;
    }
});

function playGameTurn(s) {
    if (turn === 'x' && s.innerHTML === '') {
        s.innerHTML = x;
        s.id = 'x'
        winSetting(turn);
        turn = 'o';
    } else if (turn === 'o' && s.innerHTML === '') {
        s.innerHTML = o;
        s.id = 'o'
        winSetting(turn);
        turn = 'x';
    }
    plays++;
    if (plays === 9) {
        black.classList.add('up');
        winspace.classList.remove('none');
        wintitle.innerHTML = `Draw!`;
        plays = 0;
    }
}

function winSetting(turn) {
    if (checkWin(turn)) {
        if (turn === 'x') {
            black.classList.add('up');
            winspace.classList.remove('none');
            wintitle.innerHTML = `The ${x} player Wins!`;
        } else if (turn === 'o') {
            black.classList.add('up');
            winspace.classList.remove('none');
            wintitle.innerHTML = `The ${o} player Wins!`;
        }
        plays = 0;
    }

}

function checkWin(turn) {
    if (spacesRow[0].id === spacesRow[1].id && spacesRow[1].id === spacesRow[2].id
        || spacesRow[3].id === spacesRow[4].id && spacesRow[4].id === spacesRow[5].id
        || spacesRow[6].id === spacesRow[7].id && spacesRow[7].id === spacesRow[8].id
        || spacesRow[0].id === spacesRow[3].id && spacesRow[3].id === spacesRow[6].id
        || spacesRow[1].id === spacesRow[4].id && spacesRow[4].id === spacesRow[7].id
        || spacesRow[2].id === spacesRow[5].id && spacesRow[5].id === spacesRow[8].id
        || spacesRow[0].id === spacesRow[4].id && spacesRow[4].id === spacesRow[8].id
        || spacesRow[2].id === spacesRow[4].id && spacesRow[4].id === spacesRow[6].id) {
        return true;
    }
}