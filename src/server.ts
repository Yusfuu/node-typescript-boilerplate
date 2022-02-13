import dotenv from "dotenv";
import express, { Response, Request } from "express";
import compression from "compression";
import { limiter } from "@middlewares/limiter";
import helmet from "helmet";

const app = express();
// change default environment path
dotenv.config({ path: "./.env.example" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(limiter);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World 👋");
});

const port = process.env.PORT || 3000;
const host = process.env.APP_HOSTNAME || "localhost";
const url = process.env.APP_URL || `http://${host}:${port}`;

// listen to port
app.listen(port, async () => {
  console.log(`🚀 Server ready at: ${url}`);
});
