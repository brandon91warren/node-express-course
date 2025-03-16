const { writeFile } = require("fs");

console.log("at start");

const filePath = "./temporary/fileB.txt";

writeFile(filePath, "This is line 1\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(filePath, "This is line 2\n", { flag: "a" }, (err) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        writeFile(filePath, "This is line 3\n", { flag: "a" }, (err) => {
          console.log("at point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("File write completed!");
          }
        });
      }
    });
  }
});

console.log("at end");
