import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGOURL;
    console.log('Intentando conectar a MongoDB con URL:', mongoURL);
    
    await mongoose
      .connect(process.env.MONGOURL, {})
      .then(() => console.log('Conectado a MongoDB'))
      .catch((err) => console.error('Error de conexión a MongoDB:', err));
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
  }
};