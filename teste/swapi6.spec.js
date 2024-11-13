const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 6: Verificar a lista de planetas', () => {
  it('Deve retornar uma lista de planetas', async () => {
    const res = await request(baseUrl).get('/planets/');
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});
