import mongoose from 'mongoose';
import configureApp from './config/configureApp.js';

const MONOGO_URI = process.env.MONGOURL;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONOGO_URI)
  .then(() => {
    console.log('Conexión con MongoDB OK');

    const app = configureApp();

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error de conexión con MongoDB:', error.message);
  });
