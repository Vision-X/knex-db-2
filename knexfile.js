require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory-2'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
