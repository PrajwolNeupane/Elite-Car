import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render("home");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/:id", async (req, res) => {
    var name = req.params.id;
    res.sendFile(__dirname + "/public/src/singlecar.html", { headers: { message: 'Users Show', data: name } });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
})