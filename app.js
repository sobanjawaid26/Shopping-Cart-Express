const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

const server = http.createServer(app);

server.listen(3000);
