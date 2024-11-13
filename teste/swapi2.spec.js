const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 2: Verificar a lista de filmes', () => {
  it('Deve retornar uma lista de filmes', async () => {
    const res = await request(baseUrl).get('/films/');
    expect(res.status).toBe(200);
    expect(res.body.results.length).toBeGreaterThan(0);  // Espera-se pelo menos um filme
  });
});
