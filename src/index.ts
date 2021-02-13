import { app } from './app';

const start = () => {
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

start();
