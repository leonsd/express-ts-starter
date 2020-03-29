import path from 'path';

const databases = {
  development: {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    logging: process.env.TYPEORM_LOGGING,
  },
  test: {
    type: 'sqlite',
    database: `${path.resolve(__dirname, 'src/database/test.sqlite')}`,
    logging: false,
  }
};

module.exports = {
  // type: process.env.TYPEORM_CONNECTION,
  // host: process.env.TYPEORM_HOST,
  // port: process.env.TYPEORM_PORT,
  // username: process.env.TYPEORM_USERNAME,
  // password: process.env.TYPEORM_PASSWORD,
  // database: process.env.TYPEORM_DATABASE,
  // synchronize: process.env.TYPEORM_SYNCHRONIZE,
  // logging: process.env.TYPEORM_LOGGING,
  ...(databases[process.env.NODE_ENV]),
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "src/database/migration/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
}
