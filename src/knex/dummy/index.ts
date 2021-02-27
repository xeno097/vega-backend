import { knexClient } from '../index';

export const dummyTableName = 'dummy';

const createDummyTable = async () => {
  const hasTable = await knexClient.connection.schema.hasTable(dummyTableName);

  if (hasTable) {
    console.log(`Table ${dummyTableName} already existing, Skipping creation`);
    return;
  }

  await knexClient.connection.schema.createTable('dummy', (table) => {
    table.increments('id');
    table.string('name');
  });

  const result = await knexClient.connection('dummy');

  console.log('Table Dummy created successfully');
};

export { createDummyTable };
