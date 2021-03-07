import { dummyTableName } from '..';
import { knexClient } from '../..';

it('creates a dummy entity in the dummy table', async () => {
  const dummies = await knexClient.connection(dummyTableName).select();

  expect(dummies.length).toEqual(0);

  await knexClient.connection(dummyTableName).insert({
    name: 'dummy-test',
  });

  const dummiesAfterCreate = await knexClient
    .connection(dummyTableName)
    .select();

  expect(dummiesAfterCreate.length).toEqual(1);
  expect(dummiesAfterCreate[0].name).toEqual('dummy-test');
});
