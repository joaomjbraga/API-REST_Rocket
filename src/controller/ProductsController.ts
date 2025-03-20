import {Response, Request} from 'express'
import { AppError } from '../utils/appError'
import {z} from 'zod'


export class ProductsController {
    index(req:Request, res:Response){
        const {page} = req.body
        res.send(`Pagina ${page}`)
    }
    create(req:Request, res:Response){
        const {name, price} = req.body
        
        const bodyScheme = z.object({
            name:z.string({required_error: "Nome do produto obrigatorio"}).trim().min(6,{message: 'Minimo de caracteres é 6'}),
            price:z.number({required_error: "preço obrigatorio", invalid_type_error: "é esperado um numero, não texto"}).positive({message: "Apenas numeros possitivos"})
        })

        bodyScheme.parse(req.body)

        res.status(201).json({name, price,user_id:req.user_id})
    }
   
}
