// script.js
document.getElementById("tableForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve and validate inputs
    const minCol = parseInt(document.getElementById("minCol").value);
    const maxCol = parseInt(document.getElementById("maxCol").value);
    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);

    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        alert("Fill all required boxes");
        return;
    }

    if (minCol > maxCol || minRow > maxRow || minCol < -50 || maxCol > 50 || minRow < -50 || maxRow > 50) {
        alert("Please enter values between -50 and 50, with minimums less than maximums.");
        return;
    }

    generateTable(minCol, maxCol, minRow, maxRow);
});

function generateTable(minCol, maxCol, minRow, maxRow) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("multiplication-table");

    // Generate table header
    let headerRow = table.insertRow();
    headerRow.insertCell().textContent = "";
    for (let col = minCol; col <= maxCol; col++) {
        let headerCell = headerRow.insertCell();
        headerCell.textContent = col;
    }

    // Generate table rows
    for (let row = minRow; row <= maxRow; row++) {
        let tableRow = table.insertRow();
        let rowHeader = tableRow.insertCell();
        rowHeader.textContent = row;

        for (let col = minCol; col <= maxCol; col++) {
            let cell = tableRow.insertCell();
            cell.textContent = row * col;
        }
    }

    tableContainer.appendChild(table);
}
