import * as express from 'express';
import { createConnection, useContainer } from 'typeorm';
import { Container, Service } from 'typedi';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { AuthorResolver } from './resolvers/AuthorResolver';
import { BookResolver } from './resolvers/BookResolver';

@Service()
export class Server {
  private readonly express: express.Application = express();
  private readonly port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

  private async applyMiddlewares(): Promise<void> {
    const schema = await buildSchema({
      resolvers: [AuthorResolver, BookResolver],
      container: Container,
    });

    const server = new ApolloServer({ schema, playground: true });
    server.applyMiddleware({ app: this.express });
  }

  private async setupDb(): Promise<void> {
    useContainer(Container);
    await createConnection();
  }

  public async start(cb?: () => void): Promise<void> {
    await this.setupDb();
    await this.applyMiddlewares();
    this.express.listen(this.port, cb);
  }
}
