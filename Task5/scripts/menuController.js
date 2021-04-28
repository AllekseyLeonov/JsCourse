const getPosition = (targetClassName) => {
  const bodyPosition = document.body.getBoundingClientRect().y;
  const targetPosition = document
    .getElementsByClassName(targetClassName)
    .item(0)
    .getBoundingClientRect().y;
  return bodyPosition - targetPosition;
};

const MENU_ITEMS = [
  { id: "menu__home", isActive: false },
  { id: "menu__about", isActive: false },
  { id: "menu__services", isActive: false },
  { id: "menu__projects", isActive: false },
  { id: "menu__contact", isActive: false },
];

const setMenuItemActive = (index) => {
  if (!MENU_ITEMS[index].isActive) {
    for (let i = 0; i < MENU_ITEMS.length; i++) {
      MENU_ITEMS[i].isActive = false;
      document
        .getElementById(MENU_ITEMS[i].id)
        .classList.remove("menu__item__active");
    }
    MENU_ITEMS[index].isActive = true;
    document
      .getElementById(MENU_ITEMS[index].id)
      .classList.add("menu__item__active");
  }
};

window.onscroll = () => {
  const menu = document.getElementsByClassName("menu").item(0);

  const currentMenuPosition =
    document.body.getBoundingClientRect().y -
    document.getElementsByClassName("menu").item(0).getBoundingClientRect()
      .bottom;

  const row1Position = getPosition("row1");
  const row2Position = getPosition("row2");
  const row4Position = getPosition("row4");
  const footerPosition = getPosition("footer");
  const copyrightsPosition = getPosition("copyrights");

  if (currentMenuPosition >= row1Position) {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      menu.style.backgroundColor = "white";
    }
    setMenuItemActive(0);
  } else {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      menu.style.backgroundColor = "rgba(157,157,157,0.9)";
    }
    if (
      currentMenuPosition < row1Position &&
      currentMenuPosition > row2Position
    ) {
      setMenuItemActive(1);
    } else if (
      currentMenuPosition < row2Position &&
      currentMenuPosition > row4Position
    ) {
      setMenuItemActive(2);
    } else if (
      currentMenuPosition < row4Position &&
      currentMenuPosition > footerPosition
    ) {
      setMenuItemActive(3);
    } else {
      setMenuItemActive(4);
    }
  }
};

const onMenuButtonClick = (address) => {
  document.location.href = `#${address}`;
  if (window.matchMedia("(max-width: 767px)").matches) {
    const menuLabel = document.getElementsByClassName("menu").item(0);
    const burgerButton = document
      .getElementsByClassName("burger-button")
      .item(0);
    menuLabel.style.visibility = "hidden";
    burgerButton.style.visibility = "visible";
  }
};

const onMobileMenuButtonClick = () => {
  const burgerButton = document.getElementsByClassName("burger-button").item(0);
  const menuLabel = document.getElementsByClassName("menu").item(0);
  burgerButton.style.visibility = "hidden";
  menuLabel.style.visibility = "visible";
};
