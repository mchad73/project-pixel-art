// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var gridHeight = document.getElementById("inputHeight").value;
    var gridWidth = document.getElementById("inputWidth").value;

    let container = document.getElementById('container');
    deleteGrid(container);

    createRows(container, gridHeight);
    let rows = document.getElementsByClassName("gridRow")

    createColumns(rows, gridWidth); 
}

function deleteGrid(container){
    container = document.getElementById('container');
    container.querySelectorAll('*').forEach((element) => {element.remove()});
}

function createRows(container, rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};
function createColumns(rows, cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.addEventListener('click', function (event) {
                var color = getColor()
                var styleString = `background-color: ${color}; color: ${color}`;
                event.target.style.cssText = styleString;
            });
            rows[i].appendChild(newCell).className = "cell";
        };
    };
};

function getColor(){
    let color = document.getElementById("colorPicker").value
    return color;
}
