import { Config } from 'knex';

const configKnexPgConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
  };
};

const configKnexPgScriptConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_LOCALHOST_URI,
  };
};

export { configKnexPgConnection, configKnexPgScriptConnection };
