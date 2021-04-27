const ANIMATION_STEP = 25;
const ANIMATION_DURATION = 1000;
const OPACITY_STEP = ANIMATION_STEP / ANIMATION_DURATION;
const UPDATE_INTERVAL = 6000;

const CONTENTS = [
  {
    image: "images/slider.png",
    headline: "ipsum dolor sit amet lat",
    subheadline: "Aliquam tincidunt mauris eu risus",
  },
  {
    image: "images/slider2.png",
    headline: "ipsum dolor sit amet lat 2",
    subheadline: "Aliquam tincidunt mauris eu risus 2",
  },
];

let currentContentNumber = 0;
let isOnAnimationProcess = false;
let updatingInterval = null;

const changeOpacityByTime = () => {
  updatingInterval = setInterval(() => {
    changeContent(true);
  }, UPDATE_INTERVAL);
};

window.onload = () => changeOpacityByTime();

const changeOpacity = (opacityFrom, opasityTo, step) => {
  return new Promise((resolve, reject) => {
    isOnAnimationProcess = true;
    let opacity = opacityFrom;

    const image = document.getElementById("slider__image");
    const headline = document.getElementById("slider__headline");
    const subheadline = document.getElementById("slider__subheadline");
    const objectsToChange = [image, headline, subheadline];

    const animationInterval = setInterval(() => {
      opacity += step;
      if (Math.abs(opacity - opasityTo) < Math.abs(step)) {
        clearInterval(animationInterval);
        isOnAnimationProcess = false;
        if (updatingInterval) {
          clearInterval(updatingInterval);
        }
        changeOpacityByTime();
        resolve();
      } else {
        for (let objectToChange of objectsToChange) {
          objectToChange.style.opacity = opacity;
        }
      }
    }, ANIMATION_STEP);
  });
};

const updateCurrentContentNumber = (isToTheHigher) => {
  if (isToTheHigher) {
    if (currentContentNumber !== CONTENTS.length - 1) {
      currentContentNumber++;
    } else {
      currentContentNumber = 0;
    }
  } else {
    if (currentContentNumber !== 0) {
      currentContentNumber--;
    } else {
      currentContentNumber = CONTENTS.length - 1;
    }
  }
};

async function changeContent(isToTheHigher) {
  if (!isOnAnimationProcess) {
    await changeOpacity(1, 0, -OPACITY_STEP);

    const image = document.getElementById("slider__image");
    const headline = document.getElementById("slider__headline");
    const subheadline = document.getElementById("slider__subheadline");
    const objectsToChange = [image, headline, subheadline];

    updateCurrentContentNumber(isToTheHigher);

    image.src = CONTENTS[currentContentNumber].image;
    headline.innerText = CONTENTS[currentContentNumber].headline;
    subheadline.innerText = CONTENTS[currentContentNumber].subheadline;

    await changeOpacity(0, 1, OPACITY_STEP);
  }
}

const onSliderButtonClicked = (isRightButton) => {
  changeContent(isRightButton);
};
