const DURATION = 2000;

const delay = (duration) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

function logHi() {
  console.log("Hi");
}

delay(DURATION).then(logHi);
