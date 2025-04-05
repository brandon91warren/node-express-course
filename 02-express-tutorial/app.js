const express = require("express");
const path = require("path");
const app = express();
const peopleRouter = require("./routes/people");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" });
});

app.use("/api/v1/people", peopleRouter);

app.all("*", (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
