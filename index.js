const table = document.querySelector(".table");
const tableRow = document.querySelector(".table-row");
const submit = document.querySelector(".submit");
let rows, columns;
const tableCellContent = function (row, column, totalRow) {
	let number;
	console.log(row, column);
	if (column % 2 === 0) {
		number = row + 1 + totalRow * column;
	
	}
	if (column % 2 !== 0) {
		number = totalRow * (column + 1) - row;
		
	}
	return number;
};

const generateTable = function () {
	columns = document.getElementById("column");
	rows = document.getElementById("row");

	if (
		(columns.value === "" || columns.value === 0) &&
		(rows.value === "" || rows.value === 0)
	)
		alert("put no. greater than zero");
	const colsValue = columns.value;
	const rowsValue = rows.value;

	columns.value = "";
	rows.value = "";

	table.innerHTML = "";
	for (let row = 0; row < rowsValue; row++) {
		const tr = document.createElement("tr");
		table.appendChild(tr);
		for (let column = 0; column < colsValue; column++) {
			const td = document.createElement("td");

			td.textContent = tableCellContent(row, column, rowsvalue);			if (column % 2 === 0) {
				td.style.backgroundColor = "red";
			}
			tr.appendChild(td);
		}
	}
};

submit.addEventListener("click", generateTable);
