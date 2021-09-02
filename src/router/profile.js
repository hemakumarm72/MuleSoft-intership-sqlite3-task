import Router from 'express';
import db from '../models';

const profileRouter = Router();

profileRouter.get('/', async (req, res) => {
  const profile = await db.profile.findAll();
  return res.status(200).json(profile);
});

profileRouter.get('/:id', async (req, res) => {
  const profile = await db.profile.findByPk(req.params.id);
  if (profile) {
    return res.status(200).json(profile);
  }
  return res.sendStatus(404);
});

profileRouter.post('/', async (req, res) => {
  const profile = await db.profile.create({
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
  return res.status(200).json(profile);
});

profileRouter.put('/:id', async (req, res) => {
  const profile = await db.profile.update({
    username: req.body.username,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    education: req.body.education,
    mobileno: req.body.mobileno,
    linkedin: req.body.linkedin,
    description: req.body.description,
  }, {
    where: {
      id: req.params.id,
    },

  });
  return res.status(200).json(profile);
});

profileRouter.delete('/:id', async (req, res) => {
  const profile = await db.profile.destroy({
    where: { id: req.params.id },
  });
  return res.status(200).json(profile);
});

export default profileRouter;
