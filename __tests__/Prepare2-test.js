describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.forwardproject.xyz" },
      { id: 2, url: "https://www.research.forwardproject.xyz" },
      { id: 3, url: "https://www.research.forwardproject.xyz/soc" }
    ];

    const output = [{ id: 3, url: "https://research.forwardproject.xyz/soc" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});

function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}