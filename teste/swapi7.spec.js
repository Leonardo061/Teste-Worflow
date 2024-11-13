const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 7: Verificar a resposta ao consultar um planeta específico', () => {
  it('Deve retornar detalhes de Tatooine', async () => {
    const res = await request(baseUrl).get('/planets/1/');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Tatooine');
  });
});
