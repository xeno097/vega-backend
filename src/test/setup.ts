import { configKnexTestPgConnection } from '../config/db.config';
import { knexClient } from '../knex';
import dotenv from 'dotenv';
import { cleanDb } from '../knex/clean';
import { createTables } from '../knex/create-tables';

dotenv.config();

beforeAll(async () => {
  knexClient.connect(configKnexTestPgConnection());

  await createTables();
});

afterEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await knexClient.connection.destroy();
});
