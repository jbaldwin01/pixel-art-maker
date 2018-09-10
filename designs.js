let form = document.querySelector('form');
let color = document.querySelector('#colorPicker');
let grid = document.querySelector('#pixelCanvas');
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');

/*
 * Clear the table of existing rows
 */
function clearGrid() {
    let rows = document.querySelectorAll('tr');
    for (row of rows) {
        row.remove();
    }
}
function makeGrid() {
    for (let r = 0; r < height.value; r++) {
        let row = grid.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            row.insertCell(c);
        }
    }
}

function fillCell() {
    event.target.style.backgroundColor = color.value;
}

// When size is submitted by the user, call clearGrid and makeGrid()
form.addEventListener('submit', function() {
    event.preventDefault(); // override the default submit functionality
    clearGrid();
    makeGrid();
});

// Set background color when cell is clicked
grid.addEventListener('click', fillCell);

// Set the selected color
color.addEventListener('input', function() {
    color = document.querySelector('#colorPicker');
});