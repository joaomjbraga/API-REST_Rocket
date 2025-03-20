import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewawre";
import { cursosControlle } from "../controller/CursosController";


const RouteCurse = Router()
const ControllerCursos = new cursosControlle()

RouteCurse.post('/', myMiddleware,ControllerCursos.Create)

export { RouteCurse }