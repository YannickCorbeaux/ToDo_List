import "dotenv/config";

import express from "express";

import { router } from "./src/routers/router.js";

const app = express();

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`📡📡 Server listening at http://localhost:${PORT}`);
});