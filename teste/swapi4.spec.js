const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 4: Verificar a lista de naves', () => {
  it('Deve retornar uma lista de naves', async () => {
    const res = await request(baseUrl).get('/starships/');
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});
