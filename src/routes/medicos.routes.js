import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { MedicosG, MedicosP } from './validation/medicos.js'
import { connect } from "../connection/connection.js"
const db = await connect();

const getMedicos = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const dataSend = plainToClass(MedicosP, req.body);
        const validationErrors = await validate(dataSend);

        if (validationErrors.length > 0) {
            const errorMessages = validationErrors.map(error => {
                const field = error.property;
                const description = dataSend.constructor.schema.properties[field].description;
                return `${description}: ${Object.values(error.constraints).join(', ')}`;
            });
            res.status(400).json({ message: "Error de validación", errors: errorMessages });
            return;
        }

        const medicosCollection = db.collection('medico');
        const medicosResult = await medicosCollection.find({ med_especialidad: dataSend.medico_especialidad }).sort().toArray();

        if (medicosResult.length === 0) {
            res.status(404).json({ message: "Especialidad no encontrada" });
            return;
        }

        const data = plainToClass(MedicosG, medicosResult, { excludeExtraneousValues: true });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const methodsMedicos = {
    getMedicos
}