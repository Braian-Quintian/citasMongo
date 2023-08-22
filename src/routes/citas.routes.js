import { plainToClass } from 'class-transformer';
import { CitasG} from './validation/citas.js'
import { UsuariosG} from './validation/usuarios.js'
import { connect } from "../connection/connection.js"
const db = await connect();

const getCitas = async (req, res) => {
    if (!req.rateLimit) return;
    try{
        const citasCollection = db.collection('cita');
        const usuariosCollection = db.collection('usuario');
        const citasResult = await citasCollection.find().sort({ cit_codigo: 1 }).toArray();
        const usuarioResult =  citasResult.map(item => item.cit_datosUsuario);
        const dataUsuario = await usuariosCollection.find({ "usu_id": { $in: usuarioResult } }).toArray();
        const data = plainToClass(CitasG, citasResult, { excludeExtraneousValues: true });
        const data2 = plainToClass(UsuariosG, dataUsuario, { excludeExtraneousValues: true });
        const transformedData = data.map(cita => {
            const usuarioCodigo = cita['usuario-cita'];
            const usuario = data2.find(usu => usu['dni-usuario'] === usuarioCodigo);
            return {
                ...cita,
                'usuario-cita': usuario || null
            };
        });
        res.json(transformedData);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const methodsCitas = {getCitas}