var restart = document.querySelector("#restart");
var squares = document.querySelectorAll("td");
var mark = "O"

function clearBoard() {

    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent = '';
    }
    mark = "O"
}
restart.addEventListener('click', clearBoard);

function marker() {
    if (this.textContent === "" && mark === "O") {
        this.textContent = 'X'
        mark = "X"
    } else if (this.textContent === '' && mark === "X") {
        this.textContent = 'O'
        mark = "O"
    } else {
        alert("already marked")
    }

}

function winCheck() {
    if (squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent && squares[2].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent && squares[5].textContent === mark) {
        alert(mark + " win")
        clearBoard()
    } else if (squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent && squares[8].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent && squares[8].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent && squares[6].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent && squares[6].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent && squares[7].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    } else if (squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent && squares[8].textContent === mark) {
        alert(mark + " wins")
        clearBoard()
    }
}

for (index = 0; index < squares.length; index++) {
    squares[index].addEventListener('click', marker);
    squares[index].addEventListener('click', winCheck);
}