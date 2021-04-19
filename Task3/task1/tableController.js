const downloads = [
  {
    id: 1,
    title: "Recipe",
    status: "Done",
  },
  {
    id: 2,
    title: "Workouts",
    status: "Pending",
  },
  {
    id: 3,
    title: "Passwords",
    status: "Pending",
  },
  {
    id: 4,
    title: "To Do 2021",
    status: "Pending",
  },
  {
    id: 5,
    title: "Books",
    status: "Failed",
  },
];

function fillTableByInitialValues() {
  const idRow = document.getElementById("idRow");
  const titleRow = document.getElementById("titleRow");
  const statusRow = document.getElementById("statusRow");

  for (let i = 0; i < downloads.length; i++) {
    idRow.innerHTML += `<td>${downloads[i].id}</td>`;
    titleRow.innerHTML += `<td>${downloads[i].title}</td>`;
    statusRow.innerHTML += `<td>${downloads[i].status}</td>`;
  }
}

window.onload = () => fillTableByInitialValues();

function findCellByTextContent(row, contentString) {
  console.log("Check started");
  for (let i = 0; i < row.cells.length; i++) {
    if (row.cells.item(i).innerText === contentString) {
      console.log("Found pending item");
      return row.cells.item(i);
    }
  }
  console.log("No more pending items left");
  return null;
}

function updateStatusRow() {
  const statusRow = document.getElementById("statusRow");

  setTimeout(() => {
    const findPendingCell = () => findCellByTextContent(statusRow, "Pending");
    let cellToChange = findPendingCell();

    const timerId = setInterval(() => {
      if (cellToChange !== null) {
        console.log("Item processed");
        cellToChange.innerText = "Done";
        cellToChange = findPendingCell();
      } else {
        clearInterval(timerId);
      }
    }, 5000);
  }, 3000);
}
