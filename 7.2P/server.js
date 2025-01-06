import express from "express";
import bodyParser from "body-parser";
import { ConnectToMongoDb } from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
app.set("view engine", "ejs");
ConnectToMongoDb();

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', blogRoutes);

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("likeBlog", (blogId) => {
        io.emit("updateLikes", { blogId });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    });
});

httpServer.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});