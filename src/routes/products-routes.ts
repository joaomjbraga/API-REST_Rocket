import {Router} from 'express'
import { myMiddleware } from '../middlewares/my-middlewawre'
import { ProductsController } from '../controller/ProductsController'

const productsRoutes = Router()
const productsControllers = new ProductsController()

productsRoutes.get('/', productsControllers.index)

productsRoutes.post('/',myMiddleware, productsControllers.create )

export {productsRoutes}


