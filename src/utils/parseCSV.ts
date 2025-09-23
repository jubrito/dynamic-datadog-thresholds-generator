import * as Papa from "papaparse";

/* Parses a CSV file and returns the data as a two-dimensional array of strings.
 *
 * @param {File} file - The CSV file to be parsed.
 * @returns {Promise<string[][]>} - A promise that resolves to a two-dimensional array of strings
 * representing the CSV data.
 *
 * @example
 * const file = new File(["header1,header2\nvalue1,value2"], "example.csv", { type: "text/csv" });
 * parseCSV(file).then(data => {
 *   console.log(data);
 *   // Output: [
 *   //   ['header1', 'header2'],
 *   //   ['value1', 'value2']
 *   // ]
 * }).catch(error => {
 *   console.error("Error parsing CSV:", error);
 * });
 */
export const parseCSV = (file: File): Promise<string[][]> =>
  new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: ({ data }: { data: string[][] }) => resolve(data),
      error: (err: Error) => reject(err),
      skipEmptyLines: true, // if a csv ends with an empty line [''], this prevents the parsing from considering it and throwing an undesired error
    });
  });
