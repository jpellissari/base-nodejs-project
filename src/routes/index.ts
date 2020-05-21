import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World, trying to pass 80px limit1' }),
);

export default routes;
