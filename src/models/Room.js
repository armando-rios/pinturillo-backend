import { Schema, model } from 'mongoose';
import User from "./User.js";

const roomSchema = new Schema({
  codigo: {
    type: String,
    required: true,
    unique: true // Para asegurar que no se repita el código de sala
  },
  usuarios: {
    type: [User], // Arreglo de usuarios que se han unido a la sala
    default: []
  },
  // Puedes agregar campos opcionales:
  // historialDibujo: { type: Array, default: [] },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Room = model('Room', roomSchema);

export default Room

