const { writeFileSync, readFileSync } = require("fs");

const filePath = "./temporary/fileA.txt";

writeFileSync(filePath, "This is line 1\n");

writeFileSync(filePath, "This is line 2\n", { flag: "a" });
writeFileSync(filePath, "This is line 3\n", { flag: "a" });

const content = readFileSync(filePath, "utf8");
console.log("File contents:\n", content);
