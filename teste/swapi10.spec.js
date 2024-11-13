const request = require('supertest');

describe('Test SWAPI', () => {
  it('should get a list of planets', async () => {
    const response = await request('https://swapi.dev/api')
      .get('/planets');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
  });
});