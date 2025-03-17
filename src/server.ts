import  Express, {Request, Response}  from "express";
import {routes} from './routes'
import { AppError } from "./utils/appError";
import { ZodError } from "zod";


const PORT = 2025
const app = Express()
app.use(Express.json())

app.use(routes)

app.use((err:any, req:Request, res:Response, _:any) => {
    if(err instanceof AppError){
        return res.status(err.statuscode).json({message: err.message})
    }
    if (err instanceof ZodError) {
        return res.status(400).json({message:"Erro de validação", inssues: err.format()})
    }

    res.status(500).json({message: err.message})
})

app.listen(PORT, () => console.log(`Servidor ON em Localhost:${PORT}`))