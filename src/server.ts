import * as express from 'express';
import { createConnection, getConnectionOptions, useContainer } from 'typeorm';
import { Container } from 'typedi';
import { SnakeCaseStrategy } from './db';
import { ApolloServer } from 'apollo-server-express';
import { TestResolver } from './resolvers/TestResolver';
import { buildSchema } from 'type-graphql';

export class Server {
  private readonly express: express.Application = express();
  private readonly port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

  private async applyMiddlewares(): Promise<void> {
    const schema = await buildSchema({
      resolvers: [TestResolver],
      container: Container,
    });

    const server = new ApolloServer({ schema, playground: true });
    server.applyMiddleware({ app: this.express });
  }

  private async setupDb(): Promise<void> {
    useContainer(Container);
    const connectionOptions = await getConnectionOptions();
    await createConnection({
      ...connectionOptions,
      namingStrategy: new SnakeCaseStrategy(),
    });
  }

  public start(cb?: () => void): void {
    this.express.listen(this.port, cb);
  }

  public async configure(): Promise<void> {
    await this.setupDb();
    await this.applyMiddlewares();
  }
}
