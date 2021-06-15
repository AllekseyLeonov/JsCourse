import ROUTES from "../config/constants/ROUTES";

export const getPreviewString = (stringToFormat, lengthOfPreviewString) =>
  stringToFormat.length > 20
    ? `${stringToFormat.substr(0, lengthOfPreviewString)} ...`
    : stringToFormat;

const YEAR_STRING_LENGTH = 4;
export const getYearFromDate = (date) => date.substring(0, YEAR_STRING_LENGTH);

export const formatDate = (date) =>
  `${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}.${
    date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`
  }.${date.getFullYear()}`;

export const getSharedNoteLink = (email, id) => {
  const baseUrl = window.location.href.match(/^.*\//)[0];
  return `${
    baseUrl.substring(0, baseUrl.length - 1) + ROUTES.sharedNotes
  }/${email}/${id}`;
};
