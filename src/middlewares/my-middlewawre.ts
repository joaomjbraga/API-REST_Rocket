import {Response, Request, NextFunction} from 'express'
import {randomUUID} from 'node:crypto'

export function myMiddleware(req:Request, res:Response, next: NextFunction) {

    req.user_id = randomUUID()
    console.log('Passou pelo Middleware')

    return next()
}