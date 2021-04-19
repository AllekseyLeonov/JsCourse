let timer = null;

function onKeyDown(inputFromId, inputToId) {
  clearTimeout(timer);
  const inputFrom = document.getElementById(inputFromId);
  const inputTo = document.getElementById(inputToId);
  timer = setTimeout(() => {
    inputTo.value = inputFrom.value;
  }, 1000);
}
