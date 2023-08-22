import { Router } from "express";
import { methodsUsuarios } from "../routes/usuarios.routes.js";
import {limitGet} from '../rules/reglas.js'
const router = Router();

router.get("/", limitGet(),methodsUsuarios.getUsuarios);

export {
    router
};