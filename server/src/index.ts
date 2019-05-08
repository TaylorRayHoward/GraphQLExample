import 'reflect-metadata';
import { Server } from './server';
import { Container } from 'typedi';

(async () => {
  const server = Container.get(Server);
  await server.start(() => {
    console.log('Server started');
  });
})();
