import { Request, Response } from 'express'
import path from "node:path";


export default class ErrorView {
    readonly notFound = (_req: Request, res: Response) => {
        res.render(path.join(__dirname, "../template/error.ejs"),);
    }
}
