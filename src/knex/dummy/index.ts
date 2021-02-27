import { knexClient } from '../index';

export const dummyTableName = 'dummy';

const createDummyTable = async () => {
  const hasTable = await knexClient.connection.schema.hasTable(dummyTableName);

  if (hasTable) {
    console.log(`Table ${dummyTableName} already existing, Skipping creation`);
    return;
  }

  await knexClient.connection.schema.createTable(dummyTableName, (table) => {
    table.increments('id');
    table.string('name');
  });

  console.log('Table Dummy created successfully');
};

export { createDummyTable };
