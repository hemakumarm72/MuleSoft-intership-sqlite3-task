import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import filmRouter from './router/films';
import userRouter from './router/user';
import profileRouter from './router/profile';
import db from './models';
import Movies from './router/Movies';

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json('welcome web api');
});
app.use('/user', userRouter);
app.use('/films', filmRouter);
app.use('/profile', profileRouter);
app.use('/movies', Movies);
if (process.env.NODE_ENV !== 'test') {
  db.sequelize.sync().then(() => {
    app.listen(port, () =>
      console.log('\x1b[32m', `🚀 Running on http://localhost:${port}`)
    );
  });
}
