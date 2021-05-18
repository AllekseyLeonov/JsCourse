import React from "react";
import { Grid } from "@material-ui/core";

import NotesListMenu from "./NotesListMenu";
import ActiveNote from "./ActiveNote";

const NOTES = [
  {
    id: 0,
    title: "React",
    content:
      "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов." +
      "React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций." +
      "React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость." +
      " В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL.",
    date: "03.05.2020",
  },
  {
    id: 1,
    title: "Material Design",
    content:
      "Material Design — стиль графического дизайна интерфейсов программного обеспечения и приложений," +
      " разработанный компанией Google. Впервые представлен на конференции Google I/O 25 июня 2014 года." +
      " Стиль расширяет идею «карточек», появившуюся в Google Now, более широким применением строгих макетов," +
      " анимаций и переходов, отступов и эффектов глубины (света и тени). По идее графических дизайнеров Google," +
      " у приложений не должно быть острых углов, карточки должны переключаться между собой плавно и практически незаметно.",
    date: "02.05.2020",
  },
  {
    id: 1,
    title: "Использование хука состояния",
    content:
      "useState — это хук." +
      " Мы вызываем его, чтобы наделить наш функциональный компонент внутренним состоянием." +
      " React будет хранить это состояние между рендерами. Вызов useState возвращает массив с двумя элементами," +
      " который содержит: текущее значение состояния и функцию для его обновления." +
      " Эту функцию можно использовать где угодно, например, в обработчике событий." +
      " Она схожа с this.setState в классах, но не сливает новое и старое состояние вместе.",
    date: "02.05.2020",
  },
  {
    id: 1,
    title: "GitHub Pages",
    content:
      "GitHub Pages are public web pages for users, organizations, and repositories," +
      " that are freely hosted on GitHub’s github.io domain or on a custom domain name of your choice." +
      " GitHub Pages are powered by Jekyll behind the scenes," +
      " so they’re a great way to host your Jekyll-powered website for free.",
    date: "02.05.2020",
  },
];
const DEFAULT_ITEM_INDEX = -1;

const NotesContainer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(DEFAULT_ITEM_INDEX);
  const changeSelectedIndex = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Grid container direction="row" wrap="nowrap">
      <NotesListMenu
        notesArray={NOTES}
        selectedIndex={selectedIndex}
        changeSelectedIndex={changeSelectedIndex}
      />
      <ActiveNote item xs={3} selectedItem={NOTES[selectedIndex]} />
    </Grid>
  );
};

export default NotesContainer;