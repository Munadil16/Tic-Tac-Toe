const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boxArray = document.querySelectorAll('.box');
const restart = document.querySelector('.restart');
const displayWinner = document.querySelector('.displayWinner');
let turnX = true;
let boxClickedCount = 0;

boxArray.forEach((box) => {
    box.addEventListener('click', () => {
        
        if (turnX) {  
            box.innerText = 'X';
            turnX = false;
        } else {
            box.innerText = 'O';
            turnX = true;
        }

        box.classList.add('disable');
        checkWin();

        boxClickedCount++;
        if (boxClickedCount === 9) {
            displayResult('Draw');
        }
    });
});

const checkWin = () => {
    for (let pattern of winningPatterns) {
        const box1 = boxArray[pattern[0]].innerText;
        const box2 = boxArray[pattern[1]].innerText;
        const box3 = boxArray[pattern[2]].innerText;

        if (box1 !== "" && box2 !== "" && box3 !== "") {
            if ((box1 === box2) && (box2 === box3)) {
                const winner = box1;
                boxClickedCount = 0;
                disableButtons();
                displayResult(winner);
            }
        }
    }
}

const disableButtons = () => {
    boxArray.forEach((box) => {
        box.classList.add('disable');
    });
}

const displayResult = (arg) => {
    if (arg === 'Draw') {
        displayWinner.innerText = `${arg}`;
        return;
    }
    displayWinner.innerText = `${arg} is the Winner!`;
}

restart.addEventListener('click', () => {
    boxArray.forEach((box) => {
        box.classList.remove('disable');
        box.innerText = "";
        displayWinner.innerText = "";
        boxClickedCount = 0;
        turnX = true;
    });
});
