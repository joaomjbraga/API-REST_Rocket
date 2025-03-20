import { Router } from "express";
import {productsRoutes} from './products-routes'
import { RouteCurse } from "./cursos-routes";
const routes = Router()

routes.use('/products',productsRoutes)
routes.use('/cursos', RouteCurse)

export {routes}
