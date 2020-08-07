import express from 'express';
const port = process.env.PORT || 8080

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.send('Hello world!');
})

app.listen(port, () => {
  console.log(`App is on ${port}`);
});