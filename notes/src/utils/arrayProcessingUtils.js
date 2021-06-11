export const SORT_PARAMETERS = {
  nameAscending: 0,
  nameDescending: 1,
  dateAscending: 2,
  dateDescending: 3,
};

export const sortNotesArray = (array, sortParameter) => {
  switch (sortParameter) {
    case SORT_PARAMETERS.nameAscending:
      return array.sort((note1, note2) => {
        if (note1.title > note2.title) return 1;
        if (note1.title < note2.title) return -1;
        return 0;
      });
    case SORT_PARAMETERS.nameDescending:
      return array.sort((note1, note2) => {
        if (note1.title < note2.title) return 1;
        if (note1.title > note2.title) return -1;
        return 0;
      });
    case SORT_PARAMETERS.dateAscending:
      return array.sort((note1, note2) => {
        if (note1.date > note2.date) return 1;
        if (note1.date < note2.date) return -1;
        return 0;
      });
    case SORT_PARAMETERS.dateDescending:
      return array.sort((note1, note2) => {
        if (note1.date < note2.date) return 1;
        if (note1.date > note2.date) return -1;
        return 0;
      });
    default:
      return {};
  }
};
