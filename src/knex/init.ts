import dotenv from 'dotenv';
import { knexClient } from '.';
import { configKnexPgScriptConnection } from '../config/db.config';
import { createDummyTable } from './dummy';

dotenv.config();

const init = async () => {
  knexClient.connect(configKnexPgScriptConnection());

  await createDummyTable();

  console.log('OK');
  process.exit();
};

init();
