const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 3: Verificar a resposta ao consultar um filme específico', () => {
  it('Deve retornar detalhes do filme Star Wars: A New Hope', async () => {
    const res = await request(baseUrl).get('/films/1/');
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('A New Hope');
  });
});
