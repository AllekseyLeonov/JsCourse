import { SORT_PARAMETERS, sortNotesArray } from "./arrayProcessingUtils";

it("Array  sorting should be valid", () => {
  const array = [
    { title: "A", date: "13.06.2021" },
    { title: "B", date: "11.06.2021" },
    { title: "C", date: "12.06.2021" },
  ];

  const sortedArray1 = sortNotesArray(array, SORT_PARAMETERS.nameAscending);
  expect(sortedArray1[0].title).toBe("A");

  const sortedArray2 = sortNotesArray(array, SORT_PARAMETERS.nameDescending);
  expect(sortedArray2[0].title).toBe("C");

  const sortedArray3 = sortNotesArray(array, SORT_PARAMETERS.dateAscending);
  expect(sortedArray3[0].title).toBe("B");

  const sortedArray4 = sortNotesArray(array, SORT_PARAMETERS.dateDescending);
  expect(sortedArray4[0].title).toBe("A");
});
