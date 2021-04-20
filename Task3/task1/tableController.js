const DOWNLOADS = [
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

const DOWNLOAD_STATUSES = {
  pending: "Pending",
  done: "Done",
  failed: "Failed",
};

const ONCLICK_TIMEOUT_DURATION = 3000;
const PENDING_INTERVAL_DURATION = 5000;
const STATUS_COLUMN_NUMBER = 2;

const loadDownloadTable = () => {
  const table = document.getElementById("tableBody");

  for (let i = 0; i < DOWNLOADS.length; i++) {
    let inner = `<tr>`;
    inner += `<td>${DOWNLOADS[i].id}</td>`;
    inner += `<td>${DOWNLOADS[i].title}</td>`;
    inner += `<td>${DOWNLOADS[i].status}</td>`;
    inner += `</tr>`;
    table.innerHTML += inner;
  }
};

window.onload = () => loadDownloadTable();

const findDownloadByStatus = (table, columnNumber, status) => {
  console.log("Check started");

  for (let i = 0; i < table.rows.length; i++) {
    const currentRow = table.rows.item(i);
    if (currentRow.cells.item(columnNumber).innerText === status) {
      console.log("Found pending item");
      return currentRow.cells.item(columnNumber);
    }
  }
  console.log("No more pending items left");
  return null;
};

const updateStatusRow = () => {
  const table = document.getElementById("tableBody");
  const button = document.getElementById("button");
  button.disabled = true;

  setTimeout(() => {
    const findPendingDownload = () =>
      findDownloadByStatus(
        table,
        STATUS_COLUMN_NUMBER,
        DOWNLOAD_STATUSES.pending
      );
    let cellToChange = findPendingDownload();

    const timerId = setInterval(() => {
      if (cellToChange) {
        console.log("Item processed");
        cellToChange.innerText = DOWNLOAD_STATUSES.done;
        cellToChange = findPendingDownload();
      } else {
        button.disabled = false;
        clearInterval(timerId);
      }
    }, PENDING_INTERVAL_DURATION);
  }, ONCLICK_TIMEOUT_DURATION);
};
