console.log("TIC TAC TOE")
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const winner = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        let player = document.querySelector('.player');
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.player').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
            if(gameover!== true)
            {
                player.innerText = "Draw"
            }
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            winner();
            if(!gameover) {
                document.getElementsByClassName('player')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

restart.addEventListener('click', ()=>
{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>
        {
            element.innerText = "";
        })
        turn = "X"
        gameover = false
        document.getElementsByClassName('player')[0].innerText = "Turn for " + turn;
})