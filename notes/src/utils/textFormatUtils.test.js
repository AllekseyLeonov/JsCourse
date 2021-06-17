import {
  checkIsContentCorrect,
  checkIsTitleCorrect,
  formatDate,
  getPreviewString,
  getSharedNoteLink,
} from "./textFormatUtils";

it("Preview string should be valid", () => {
  const content1 = "lorem";
  const content2 = "lorem ipsum lorem ipsum";
  const lengthOfPreviewString = 11;

  const previewString1 = getPreviewString(content1, lengthOfPreviewString);
  const previewString2 = getPreviewString(content2, lengthOfPreviewString);

  expect(previewString1).toBe("lorem");
  expect(previewString2).toBe("lorem ipsum ...");
});

it("Date format should be valid", () => {
  const date = new Date("December 17, 1995 00:00:00");

  const formatedDate = formatDate(date);

  expect(formatedDate).toBe("17.12.1995");
});

it("note title and content should be valid", () => {
  const note1 = { title: "", content: "" };
  const note2 = {
    title: "Lorem ipsum dolor sit amet accumsan.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at fermentum neque. Nulla a tempor ex, nec bibendum sem. Ut sapien urna, semper venenatis aliquet at, vehicula in massa. Phasellus nibh diam, vestibulum sit amet accumsan eu, semper ac erat. Cras eu felis at risus gravida sollicitudin ac at diam. Pellentesque sit amet consectetur eros. In placerat risus et sapien lobortis, eu sagittis nunc placerat. Morbi nec auctor neque, a tincidunt est. Duis a est a ipsum tincidunt suscipit sed eget lacus. Nulla eget massa mauris. In imperdiet, ante quis feugiat volutpat, sem est rutrum nunc, quis laoreet lorem eros nec purus. Nunc sed odio nec purus viverra tempor. Phasellus a eros suscipit, finibus tortor nec, tincidunt elit. Nunc ac ante maximus, semper sapien nec, vehicula leo.\n" +
      "Sed condimentum est sit amet dui tristique tincidunt. Morbi consequat pharetra diam, a laoreet eros interdum sit amet. Aliquam consequat sollicitudin nisi in molestie. Maecenas eu pretium lorem. Sed pellentesque, lectus non sollicitudin volutpat, nunc ante posuere leo, id vestibulum dui dolor in nunc. Nam cursus suscipit tellus eu pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consequat nibh a quam hendrerit euismod. Donec mattis ante quis tellus vulputate dignissim. Integer in arcu et metus interdum auctor vel ac lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fermentum interdum luctus. Nunc id sodales ligula. Aliquam accumsan laoreet dolor, sed fringilla enim vestibulum ultricies.\n" +
      "Proin vel tellus ac odio faucibus accumsan vitae at risus. Nam venenatis velit eget felis pharetra laoreet. Proin rutrum sapien a fermentum pharetra. Nullam vel sem egestas est cursus pharetra non ac augue. Vestibulum accumsan auctor arcu at cursus. Nulla ut enim magna. Etiam orci leo, scelerisque vitae lectus at, euismod fringilla dui. In egestas, diam sed tempus laoreet, tellus justo massa nunc.",
  };
  const note3 = {
    title: "Lorem ipsum dolor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const isTitle1Correct = checkIsTitleCorrect(note1.title);
  const isContent1Correct = checkIsContentCorrect(note1.content);
  const isTitle2Correct = checkIsTitleCorrect(note2.title);
  const isContent2Correct = checkIsContentCorrect(note2.content);
  const isTitle3Correct = checkIsTitleCorrect(note3.title);
  const isContent3Correct = checkIsContentCorrect(note3.content);

  expect(isTitle1Correct).toBe(false);
  expect(isContent1Correct).toBe(false);
  expect(isTitle2Correct).toBe(false);
  expect(isContent2Correct).toBe(false);
  expect(isTitle3Correct).toBe(true);
  expect(isContent3Correct).toBe(true);
});
