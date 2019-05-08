const { SnakeCaseStrategy } = require('./config/SnakeCaseStrategy');

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'graphql',
  password: 'password',
  database: 'graphql',
  synchronize: false,
  logging: false,
  entities: [
    'build/entity/**/*.js'
  ],
  migrations: [
    'build/migration/**/*.js'
  ],
  subscribers: [
    'build/subscriber/**/*.js'
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  },
  migrationsTableName: 'typeorm_migrations',
  namingStrategy: new SnakeCaseStrategy()
};
