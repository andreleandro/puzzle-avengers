const rows = 5;
const columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function () {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //img
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg"
            //Drag funcionality
            tile.addEventListener("dragstart", dragStart) // click on image to start
            tile.addEventListener("dragover", dragOver) // drag an image
            tile.addEventListener("dragenter", dragEnter) // dragging an image into another one
            tile.addEventListener("dragleave", dragLeave) //dragging an image away from another one
            tile.addEventListener("drop", dragDrop) //drop an image into another one
            tile.addEventListener("dragend", dragEnd) //after you completed dragDrop

            document.getElementById("board").append(tile)
        }
    }

    //pieces
    let pieces = []
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()) // put "1" to "25" into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i]
        pieces[i] = pieces[j]
        pieces[j] = tmp
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";

        //Drag funcionality
        tile.addEventListener("dragstart", dragStart) // click on image to start
        tile.addEventListener("dragover", dragOver) // drag an image
        tile.addEventListener("dragenter", dragEnter) // dragging an image into another one
        tile.addEventListener("dragleave", dragLeave) //dragging an image away from another one
        tile.addEventListener("drop", dragDrop) //drop an image into another one
        tile.addEventListener("dragend", dragEnd) //after you completed dragDrop

        document.getElementById("pieces").append(tile)
    }
}

// Drag Tiles
function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd () {
    if(currTile.src.includes("blank")) {
        return;
    }
    
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1
    document.getElementById("turns").innerText = turns
}