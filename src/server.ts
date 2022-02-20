import 'dotenv/config';
import express, { Response, Request } from 'express';
import compression from 'compression';
import { limiter } from '@middlewares/limiter';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(limiter);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hi Mom 👋',
  });
});

const port = process.env.PORT || 5000;

// listen to port
app.listen(port, async () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
