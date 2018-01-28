var express     = require("express"),
    app         = express(),
    PORT        = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
  console.log("Listening on: ", PORT);
});
