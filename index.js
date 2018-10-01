const express = require("express");
const app = express();

app.get("/*", (req, resp) => {
    resp.statusCode = 200;
    resp.write("Hello world!");
    resp.end();
});

app.listen(3000);
