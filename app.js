import express from 'express';
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
        res.sendFile(__dirname + "/public/src/home.html");
});
app.get("/contact", async (req, res) => {
    res.sendFile(__dirname + "/public/src/contact.html");
});

server.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
})