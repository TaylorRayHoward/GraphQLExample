import { Server } from './server';

(async () => {
  const server = new Server();
  await server.configure();
  await server.start(() => {
    console.log('Server started');
  });
})();
