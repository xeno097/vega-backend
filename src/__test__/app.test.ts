import request from 'supertest';
import { app } from '../app';

it('returns 404 when tryign to get / url', () => {
  return request(app).get('/').expect(404);
});
