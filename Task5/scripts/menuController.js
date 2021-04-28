const MENU_ITEMS = [
  { id: "menu__home", isActive: false, sections: ["header"] },
  { id: "menu__about", isActive: false, sections: ["slider", "row1"] },
  { id: "menu__services", isActive: false, sections: ["row2", "row3"] },
  { id: "menu__projects", isActive: false, sections: ["row4"] },
  { id: "menu__contact", isActive: false, sections: ["footer", "copyrights"] },
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

window.onscroll = () => updateMenuItems();

const updateMenuItems = () => {
  const menu = document.getElementsByClassName("menu").item(0);

  const currentMenuPosition = document
    .getElementsByClassName("menu")
    .item(0)
    .getBoundingClientRect().bottom;
  const sliderPosition = document
    .getElementsByClassName("slider")
    .item(0)
    .getBoundingClientRect().top;
  if (currentMenuPosition <= sliderPosition) {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      menu.style.backgroundColor = "white";
    }
    setMenuItemActive(0);
  } else {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      menu.style.backgroundColor = "rgba(157,157,157,0.9)";
    }
    for (let i = 1; i < MENU_ITEMS.length; i++) {
      let currentSectionHeight = 0;
      MENU_ITEMS[i].sections.forEach((element) => {
        elementTop = document
          .getElementsByClassName(element)
          .item(0)
          .getBoundingClientRect().top;
        elementBottom = document
          .getElementsByClassName(element)
          .item(0)
          .getBoundingClientRect().bottom;

        elementAbsoluteTop = elementTop + pageYOffset;

        if (elementAbsoluteTop < pageYOffset) {
          currentSectionHeight += elementBottom;
        } else if (elementTop < screen.height) {
          if (elementBottom < screen.height) {
            currentSectionHeight += elementBottom - elementTop;
          } else {
            currentSectionHeight += screen.height - elementTop;
          }
        }
      });
      if (currentSectionHeight > screen.height/2) {
        setMenuItemActive(i);
      }
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
  updateMenuItems();
};

const onMobileMenuButtonClick = () => {
  const burgerButton = document.getElementsByClassName("burger-button").item(0);
  const menuLabel = document.getElementsByClassName("menu").item(0);
  burgerButton.style.visibility = "hidden";
  menuLabel.style.visibility = "visible";
};
