const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("temp.txt", "Line 1: This is the first line.\n");
    await writeFile("temp.txt", "Line 2: This is the second line.\n", { flag: "a" });
    await writeFile("temp.txt", "Line 3: This is the third line.\n", { flag: "a" });
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();
