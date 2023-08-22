import { generateToken } from './keys/autorizacion.js';

export async function autenticacion(req, res) {
  const { usuario } = req.params;
  try {
    const jwt = await generateToken(usuario);
    if (jwt) {
      res.json({ jwt });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
