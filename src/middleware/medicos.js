import { Router } from "express";
import { methodsMedicos } from "../routes/medicos.routes.js";
import {limitGet} from '../rules/reglas.js'
const router = Router();

router.get("/", limitGet(),methodsMedicos.getMedicos);

export {
    router
};