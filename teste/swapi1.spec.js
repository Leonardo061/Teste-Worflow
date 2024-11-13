const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';  // URL base da API

describe('Teste 1: Verificar se a API está acessível', () => {
  it('Deve retornar 200 ao acessar a raiz da API', async () => {
    const res = await request(baseUrl).get('/');
    expect(res.status).toBe(200);
  });
});
