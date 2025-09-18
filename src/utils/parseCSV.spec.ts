import { parseCSV } from "./parseCSV";

describe("parseCSV", () => {
  const createFile = (content: string, name = "test.csv") =>
    new File([content], name, { type: "text/csv" });

  it("parses a simple CSV", async () => {
    const file = createFile("a,b\nc,d");
    const data = await parseCSV(file);
    expect(data).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("parses a CSV with empty lines and skips them", async () => {
    const file = createFile("a,b\nc,d\n\n");
    const data = await parseCSV(file);
    expect(data).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("parses quoted values and commas", async () => {
    const file = createFile('a,"b,1"\nc,"d,2"');
    const data = await parseCSV(file);
    expect(data).toEqual([
      ["a", "b,1"],
      ["c", "d,2"],
    ]);
  });

  it("parses a single row", async () => {
    const file = createFile("a,b,c");
    const data = await parseCSV(file);
    expect(data).toEqual([["a", "b", "c"]]);
  });

  it("returns an empty array for an empty file", async () => {
    const file = createFile("");
    const data = await parseCSV(file);
    expect(data).toEqual([]);
  });

  it("rejects on invalid file (simulate error)", async () => {
    // Simulate error by passing a non-File object
    await expect(parseCSV({} as File)).rejects.toBeInstanceOf(Error);
  });
});
