import express, { Application, Request, Response } from "express";
const port = 8000;

const app: Application = express();

app.use(express.static('public'))

app.use("/api/list", (req: Request, res: Response) => {
  res.json([
    {
      firstName: 'Steven',
      lastName: 'Ballaret'
    },
    {
      firstName: 'Remy',
      lastName: 'Sablon'
    },
    {
      firstName: 'Dave',
      lastName: 'Alivio'
    }
  ])
});

app.use("/", (req: Request, res: Response) => {
  res.send("Hello welcome!");
})

app.listen(port, () => {
  console.log(`now listening on port ${port}`)
});
