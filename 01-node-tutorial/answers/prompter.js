const http = require("http");
const querystring = require("querystring");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number between 1 and 100!";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { guess } = querystring.parse(body);
      const userGuess = parseInt(guess, 10);

      if (userGuess < randomNumber) {
        message = "Too low! Try again.";
      } else if (userGuess > randomNumber) {
        message = "Too high! Try again.";
      } else {
        message = `Correct! The number was ${randomNumber}. Generating a new number...`;
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }

      res.writeHead(302, { Location: "/" });
      res.end();
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Number Guessing Game</h1>
      <p>${message}</p>
      <form method="POST">
        <input type="number" name="guess" required />
        <button type="submit">Submit</button>
      </form>
    `);
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});

server.listen(3000, () => {
  console.log("Number guessing game running on http://localhost:3000");
});
