import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

const app = express();

const port = 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
});

app.get("/", (_, res) => {
    res.send("Hello World")
})

export default app;