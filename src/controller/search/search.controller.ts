import { Request, Response } from 'express'


export class SearchController {
    public static search(req: Request, res: Response): void {
        res.json("test").end()
    }
}