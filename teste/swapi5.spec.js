const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

describe('Teste 5: Verificar se a nave "Millennium Falcon" está presente', () => {
  it('Deve retornar a Millennium Falcon na lista de naves', async () => {
    const res = await request(baseUrl).get('/starships/');
    const falcon = res.body.results.find(starship => starship.name === 'Millennium Falcon');
    expect(falcon).toBeDefined();
  });
});
