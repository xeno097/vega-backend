import { Config } from 'knex';

const configKnexPgConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
  };
};

const configKnexTestPgConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_TEST_DB_URI,
  };
};

const configKnexPgScriptConnection = (): Config => {
  return {
    client: 'pg',
    connection: process.env.POSTGRES_LOCALHOST_URI,
  };
};

export {
  configKnexPgConnection,
  configKnexPgScriptConnection,
  configKnexTestPgConnection,
};
