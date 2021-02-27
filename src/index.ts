import { app } from './app';
import { configKnexPgConnection } from './config/db.config';
import { knexClient } from './knex';

const start = () => {
  const port = process.env.PORT;

  knexClient.connect(configKnexPgConnection());

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

start();
