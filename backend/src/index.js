import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";



const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    req.statusCode(statusCode).json({ message : err.message });
})

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

