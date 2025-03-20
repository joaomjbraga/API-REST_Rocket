import {Request, Response} from 'express'
import { KNEX } from '../database/knex'

export class cursosControlle {
     // com Knex
     async Create(req:Request, res:Response) {
        const {name} = req.body

        await KNEX('cursos').insert({name})
        res.status(201).json({message: "Criado com sucesso!"})
     }
}