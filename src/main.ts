import 'dotenv/config';
import express, { Response, Request } from 'express';
import compression from 'compression';
import { limiter } from '@middlewares/limiter';
import helmet from 'helmet';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(helmet(), compression(), limiter, express.json());

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hi Mom 👋' });
});

const port = process.env.PORT || 5000;

// listen to port
app.listen(port, async () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
