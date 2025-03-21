import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewawre";
import { cursosControlle } from "../controller/CursosController";


const RouteCurse = Router()
const ControllerCursos = new cursosControlle()

RouteCurse.post('/', myMiddleware,ControllerCursos.Create)
RouteCurse.get('/:id', myMiddleware,ControllerCursos.List)
RouteCurse.put('/:id', myMiddleware, ControllerCursos.Update)
RouteCurse.delete('/:id', myMiddleware, ControllerCursos.Delete)

export { RouteCurse }