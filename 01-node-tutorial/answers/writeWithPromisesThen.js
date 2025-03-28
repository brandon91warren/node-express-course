const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1: This is the first line.\n")
  .then(() => {
    return writeFile("temp.txt", "Line 2: This is the second line.\n", { flag: "a" });
  })
  .then(() => {
    return writeFile("temp.txt", "Line 3: This is the third line.\n", { flag: "a" });
  })
  .then(() => {
    return readFile("temp.txt", "utf-8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
