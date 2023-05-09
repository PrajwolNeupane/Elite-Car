import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { carData } from './public/js/util.js';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
// app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/public'));

// app.get("/", function (req, res) {
//     res.render("home");
// });
// app.get("/service", function (req, res) {
//     res.render("service");
// });
// app.get("/contact", function (req, res) {
//     res.render("contact");
// });
// app.get("/:id", function (req, res) {
//     try {
//         var id = Number(req.params.id);
//         res.render('singlecar', { data: carData[id] });
//     }catch(e){
        
//     }
// });

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
})