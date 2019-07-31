const repo = require('../../src/repositories/usgsRepository');


test('should call getEarthquakeDetails',async()=>{
    //act
    const result = await repo.getEarthquakeDetails(1);

    //assert
    expect(result).toEqual('earthquake id requested was: 1');
});

test('should call getEarthquakes',async()=>{

    //act
    const result = await repo.getEarthquakes();

    //assert
    expect(result.features.length).toEqual(1);
});
