const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes'));

app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
