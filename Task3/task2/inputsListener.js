let timer = null;
const TIMEOUT_DURATION = 1000;

const onKeyDown = (inputFromId, inputToId) => {
  if (timer) {
    clearTimeout(timer);
  }

  const inputFrom = document.getElementById(inputFromId);
  const inputTo = document.getElementById(inputToId);

  timer = setTimeout(() => {
    inputTo.value = inputFrom.value;
  }, TIMEOUT_DURATION);
};
