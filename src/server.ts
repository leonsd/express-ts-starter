import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  const { log } = console;
  log('App started in PORT ', PORT);
});
