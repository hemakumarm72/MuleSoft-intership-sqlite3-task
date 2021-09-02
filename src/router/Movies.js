import Router from 'express';
import db from '../models';

const Movies = Router();

Movies.get('/', async (req, res) => {
  const movies = await db.movies.findAll();
  return res.status(200).json(movies);
});

Movies.get('/:id', async (req, res) => {
  const movies = await db.movies.findByPk(req.params.id);
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.sendStatus(404).json;
});

Movies.post('/insert', async (req, res) => {
  const movies = await db.movies.create({
    Name: req.body.Name,
    Actor: req.body.Actor,
    Actress: req.body.Actress,
    YearOfRelease: req.body.YearOfRelease,
    Directorname: req.body.Directorname,
    Description: req.body.Description,
  });
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.status(404).json('error of insert data');
});

Movies.put('/update/:id', async (req, res) => {
  const movies = await db.movies.update(
    {
      Name: req.body.Name,
      Actor: req.body.Actor,
      Actress: req.body.Actress,
      YearOfRelease: req.body.YearOfRelease,
      Directorname: req.body.Directorname,
      Description: req.body.Description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.status(404).json('error for update data');
});

Movies.delete('/delete/:id', async (req, res) => {
  const movies = await db.movies.destroy({
    where: { id: req.params.id },
  });
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.status(404).json('not found id');
});

export default Movies;
