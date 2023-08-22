import { SignJWT } from 'jose';
import { connect } from '../../connection/connection.js';
import conexion from '../../connection/credentials.js';
export async function generateToken(usuario) {
  const encoder = new TextEncoder();
  const db = await connect();
  try {
    const result = await db.collection('Users').findOne({ usuario });
    if (!result) {
      return null;
    } else {
       const {_id:id} = result
      const jwt = await new SignJWT({ id })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(conexion.token));
      return jwt;
    }
  } catch (error) {
    throw new Error('Error al generar el token');
  }
}