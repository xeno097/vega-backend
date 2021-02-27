import knex, { Config } from 'knex';

class KnexClient {
  private _client!: knex<any, unknown[]>;

  get connection() {
    if (!this._client) {
      throw new Error('Knex connection not initialized');
    }

    return this._client;
  }

  connect(knexConfig: Config) {
    this._client = knex(knexConfig);
  }
}

const knexClient = new KnexClient();

export { knexClient };
