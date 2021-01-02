
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", ()=>{
        cell.style.backgroundColor = "#ee6c4d";
    });
  };
};

makeRows(16, 16);

const gridItems = document.querySelectorAll(".grid-item");
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", ()=>{
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});
