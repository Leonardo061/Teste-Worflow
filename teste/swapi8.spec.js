const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 8: Verificar a lista de pessoas', () => {
  it('Deve retornar uma lista de pessoas', async () => {
    const res = await request(baseUrl).get('/people/');
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});
