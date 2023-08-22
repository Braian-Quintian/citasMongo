import { Router } from "express";
import { methodsCitas } from "../routes/citas.routes.js";
import {limitGet} from '../rules/reglas.js'
const router = Router();

router.get("/", limitGet(),methodsCitas.getCitas);

export {
    router
};