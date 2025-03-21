import {Request, Response} from 'express'
import { KNEX } from '../database/knex'

export class cursosControlle {
     // com Knex
     async Create(req:Request, res:Response) {
        const {name} = req.body

        await KNEX('cursos').insert({name})
        res.status(201).json({message: "Criado com sucesso!"})
     }
     async List(req:Request,res:Response) {
      const {id} = req.params
      const cursos = await KNEX.select('*').from('cursos')
      
      res.status(200).json({cursos})
     }
     async Update(req:Request,res:Response) {
      const {name} = req.body
      const {id} = req.params
      await KNEX('cursos').where({id}).update({name})

      res.status(204).json({messagem:"Atualização bem sucedida!"})
     }
     async Delete(req:Request,res:Response) {
      const {id} = req.params
      await KNEX('cursos').where({id}).delete()

      res.status(200).json({messagem:"Curso deletado com sucesso!"})
     }
}