const server = require('./server');

it('should use testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
})