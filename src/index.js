import express  from 'express';

const app = express();

app.listen(3000);

app.use(express.json());

// app.use("/api", router);

// app.get("*", async (req: express.Request, res: express.Response) => {
//     res.status(404).send("This route does not exist.");
// });