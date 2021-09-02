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
  return res.sendStatus(404);
});

Movies.post('/insert', async (req, res) => {
  const movies = await db.movies.create({
    username: req.body.username,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    education: req.body.education,
    mobileno: req.body.mobileno,
    linkedin: req.body.linkedin,
    description: req.body.description,
  });
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.sendStatus(404);
});

Movies.put('/:id', async (req, res) => {
  const movies = await db.movies.update(
    {
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      address: req.body.address,
      education: req.body.education,
      mobileno: req.body.mobileno,
      linkedin: req.body.linkedin,
      description: req.body.description,
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
  return res.sendStatus(404);
});

Movies.delete('delete/:id', async (req, res) => {
  const movies = await db.movies.destroy({
    where: { id: req.params.id },
  });
  if (movies) {
    return res.status(200).json(movies);
  }
  return res.sendStatus(404);
});

export default Movies;
