import express from "express";
import { connectToDatabase } from "./services/database"
import { usersRouter } from "./routes/router";

const app = express();
let port = 3030;

connectToDatabase()
    .then(() => {
        app.use("/users", usersRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });