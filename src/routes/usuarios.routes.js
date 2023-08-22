import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import {UsuariosG, UsuariosGA} from './validation/usuarios.js'
import { connect } from "../connection/connection.js"
const db = await connect();

const getUsuarios = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const usuariosCollection = db.collection('usuario');
        const acudientesCollection = db.collection('acudiente');
        const usuariosResult = await usuariosCollection.find().sort({ usu_nombre: 1 }).toArray();
        const usuAcudienteValues = usuariosResult.map(item => item.usu_acudiente);
        const acudientesResult = await acudientesCollection.find({ "acu_codigo": { $in: usuAcudienteValues } }).toArray();
        const data = plainToClass(UsuariosG, usuariosResult, { excludeExtraneousValues: true });
        const data2 = plainToClass(UsuariosGA, acudientesResult, { excludeExtraneousValues: true });
        const transformedData = data.map(usuario => {
            const acudienteCodigo = usuario['acudiente-usuario'];
            const acudiente = data2.find(acu => acu['codigo-acudiente'] === acudienteCodigo);
            return {
                ...usuario,
                'acudiente-usuario': acudiente || null
            };
        });
        res.json(transformedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const methodsUsuarios = {getUsuarios}