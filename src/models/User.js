import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  socketId: {
    type: String, // Para identificar la conexión en tiempo real
    required: true
  },
  rol: { type: String, enum: ['anfitrión', 'jugador'], default: 'jugador' },
  // estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' }
});

const User = model('User', userSchema);

export default User

