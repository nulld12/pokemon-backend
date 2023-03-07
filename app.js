"use strict"

const app = express();
const cors = cors();
app.use(express.json());
app.use(express.urlencode({ extends: true }));
const fs = require("fs");
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const combates = [];
app.use((req, res, next) => {
    req.combates = combates;
    next();
})

app.use("/pokemon", require("./pokemon"));

app.use("/combates", require("./combate"));

app, use((req, res, next) => {
    res.status(404).send("404 not found");
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(400).send(err.message);
})

