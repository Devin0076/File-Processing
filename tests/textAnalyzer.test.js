const {
  countWords,
  findLongestWord,
  countLines,
  tokenizeWords
} = require("../src/textAnalyzer");

describe("textAnalyzer", () => {
  test("countWords counts words in a sentence", () => {
    expect(countWords("Hello world! This is a test.")).toBe(6);
  });

  test("countWords handles empty and punctuation-only strings", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("...?!")).toBe(0);
  });

  test("tokenizeWords handles apostrophes and Unicode characters", () => {
    const tokens = tokenizeWords("Café déjà vu isn't unusual.");
    expect(tokens).toEqual(expect.arrayContaining(["café", "déjà", "vu", "isn't", "unusual"]));
  });

  test("findLongestWord returns the first longest word when tied", () => {
    expect(findLongestWord("alpha beta gamma")).toBe("alpha");
  });

  test("findLongestWord returns null when no words are present", () => {
    expect(findLongestWord("")).toBeNull();
  });

  test("countLines correctly counts LF, CRLF, and empty lines", () => {
    expect(countLines("a\nb\nc")).toBe(3);
    expect(countLines("a\r\nb\r\nc")).toBe(3);
    expect(countLines("")).toBe(0);
    expect(countLines("a\n")).toBe(2);
  });
});
