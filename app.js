const express = require("express");
const app = express();
const path = require("path");

// app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});

// Can also be included with a regular script tag
// const options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40,
// };
// const typed = new Typed(".element", options);

// var typed = new Typed(".element", {
//   // Waits 1000ms after typing "First"
//   strings: ["First ^1000 sentence.", "Second sentence."],
// });
