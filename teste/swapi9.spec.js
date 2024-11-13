const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 9: Verificar se Luke Skywalker está presente na lista de pessoas', () => {
  it('Deve retornar Luke Skywalker na lista de pessoas', async () => {
    const res = await request(baseUrl).get('/people/');
    const luke = res.body.results.find(person => person.name === 'Luke Skywalker');
    expect(luke).toBeDefined();
  });
});
