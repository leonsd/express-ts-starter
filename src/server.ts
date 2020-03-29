import App from './app';

const PORT = process.env.PORT || 3333;

App.then((app) => {
  app.listen(PORT, () => {
    const { log } = console;
    log('App started in PORT ', PORT);
  });
});
