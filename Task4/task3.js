const MAX_DURATION = 4000;
const MAX_ACCEPTABLE_DURATION = MAX_DURATION / 2;
const RAND = Math.floor(Math.random() * MAX_DURATION);

const promise = new Promise((resolve, reject) => {
  const startTime = new Date();
  setTimeout(() => {
    const finishTime = new Date();
    const duration = finishTime - startTime;
    if (duration < MAX_ACCEPTABLE_DURATION) {
      console.log(`Duration was ${duration} milliseconds`);
      resolve();
    } else {
      reject(`Duration was ${duration} milliseconds`);
    }
  }, RAND);
}).catch((e) => console.error(e));
