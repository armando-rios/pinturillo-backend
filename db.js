import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

async function connectDB() {
  if (!URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  try {
    await mongoose.connect(URI);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Salir del proceso si ocurre un error crítico
  }
}

export default connectDB;
