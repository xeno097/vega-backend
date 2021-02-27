import { Config } from 'knex';

const configureKnexPgConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
  };
};

export { configureKnexPgConnection };
