import Router from 'express';
import db from '../models';

const filmRouter = Router();

filmRouter.get('/', async (req, res) => {
  const films = await db.film.findAll();
  return res.status(200).json(films);
});

filmRouter.get('/:id', async (req, res) => {
  const film = await db.film.findByPk(req.params.id);

  if (film) {
    return res.status(200).json(film);
  }
  return res.sendStatus(404);
});

filmRouter.post('/', async (req, res) => {
  const film = await db.film.create({
    film: req.body.film,
    times: req.body.times,
    watched: req.body.watched,
    createdOn: req.body.createdOn,
  });
  return res.status(200).json(film);
});

filmRouter.put('/:id', async (req, res) => {
  const film = await db.film.update({
    film: req.body.film,
    times: req.body.times,
    watched: req.body.watched,
    createdOn: req.body.createdOn,
  }, {
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json(film);
});

filmRouter.delete('/:id', async (req, res) => {
  const film = await db.film.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json(film);
});

export default filmRouter;
