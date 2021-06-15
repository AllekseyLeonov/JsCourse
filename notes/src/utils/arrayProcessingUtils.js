import { SHARED_NOTES_ARRAY_KEY } from "../config/constants/LOCAL_STORAGE_KEYS";

export const SORT_PARAMETERS = {
  nameAscending: 0,
  nameDescending: 1,
  dateAscending: 2,
  dateDescending: 3,
  none: 4,
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
    case SORT_PARAMETERS.none:
      return array;
    default:
      return {};
  }
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const updateSharedNotesArray = (noteToUpdate, userWhoShare) => {
  const currentArrayAsString = localStorage.getItem(SHARED_NOTES_ARRAY_KEY);
  let currentArray = currentArrayAsString
    ? JSON.parse(currentArrayAsString)
    : [];
  currentArray =
    currentArray.filter(
      (data) =>
        data.userWhoShare === userWhoShare &&
        noteToUpdate.id === data.note.id &&
        noteToUpdate.userEmail === data.note.userEmail
    ).length !== 0
      ? currentArray
      : currentArray.concat({
          userWhoShare,
          note: noteToUpdate,
        });
  localStorage.setItem(SHARED_NOTES_ARRAY_KEY, JSON.stringify(currentArray));
};
