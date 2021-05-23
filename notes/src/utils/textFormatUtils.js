// eslint-disable-next-line import/prefer-default-export
export const getPreviewString = (stringToFormat, lengthOfPreviewString) =>
  stringToFormat.length > 20
    ? `${stringToFormat.substr(0, lengthOfPreviewString)} ...`
    : stringToFormat;
