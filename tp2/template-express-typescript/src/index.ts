import { makeApp } from './app';

const PORT = process.env.PORT || 3000;

const app = makeApp();

app.listen(PORT, () => {
  console.log(` API de pizzeria corriendo en el puerto: ${PORT}`);
});