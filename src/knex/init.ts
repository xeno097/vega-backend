import dotenv from 'dotenv';
import { knexClient } from '.';
import { configKnexPgScriptConnection } from '../config/db.config';
import { createTables } from './create-tables';

dotenv.config();

const init = async () => {
  knexClient.connect(configKnexPgScriptConnection());

  await createTables();

  console.log('OK');
  process.exit();
};

init();
