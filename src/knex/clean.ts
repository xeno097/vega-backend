import { knexClient } from '.';
import { dummyTableName } from './dummy';

const cleanDb = async () => {
  await knexClient.connection(dummyTableName).where({}).delete();
};

export { cleanDb };
