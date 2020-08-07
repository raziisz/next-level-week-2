import express from 'express';
import routes from './routes';
import cors from 'cors';
const port = process.env.PORT || 8080

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`App is on ${port}`);
});