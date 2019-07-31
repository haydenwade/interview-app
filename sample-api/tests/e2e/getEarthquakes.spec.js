const rp = require('request-promise');
const baseUrl = 'http://localhost:3000';

//TODO: rename __mocks__/request-promise.js so it doesn't mock it
test('should fetch earthquakes', async() => {
    const result = await rp.get(baseUrl+'/earthquakes');
    expect(result.length).toBeGreaterThan(0);
});