const express = require("express");
const chef = require("./chefApp.json");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("chef app running!");
});

app.get("/chef", (req, res) => {
    res.send(chef);
});

app.get("/chef/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const selectedChef = chef.find((n) => parseInt(n.id) === id);
    res.send(selectedChef);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
