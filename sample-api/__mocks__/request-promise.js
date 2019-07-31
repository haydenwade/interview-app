const rp = {
    get: jest.fn().mockImplementation(()=>Promise.resolve({features:[1]}))
};

module.exports = rp;