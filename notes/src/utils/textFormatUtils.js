export const getPreviewString = (stringToFormat, lengthOfPreviewString) =>
  stringToFormat.length > 20
    ? `${stringToFormat.substr(0, lengthOfPreviewString)} ...`
    : stringToFormat;

const YEAR_STRING_LENGTH = 4;
export const getYearFromDate = (date) => date.substring(0, YEAR_STRING_LENGTH);
