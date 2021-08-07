const app = require("express")();
app.get("/", (req, res) => {
  res.send(
    "hello from lightweight container!! PortNumber:" +
      req.headers.host.split(":")[1]
  );
});

app.listen(1111, () => console.log("listening on 1111"));
