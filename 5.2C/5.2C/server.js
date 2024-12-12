import express from "express";
import bodyParser from "body-parser";
import { ConnectToMongoDb } from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";

ConnectToMongoDb();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', blogRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});