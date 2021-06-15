// eslint-disable-next-line import/no-unresolved
import ROUTES from "@constants/ROUTES";
import {
  TITLE_MAX_LENGTH,
  CONTENT_MAX_LENGTH,
  // eslint-disable-next-line import/no-unresolved
} from "@constants/NOTES";

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

export const checkIsTitleCorrect = (title) =>
  title.length > 0 && title.length < TITLE_MAX_LENGTH;
export const checkIsContentCorrect = (content) =>
  content.length > 0 && content.length < CONTENT_MAX_LENGTH;
