import { Request, Response } from 'express'
import {SwapiService} from '../../service/swapi'


export class SearchController {
    public static async search(req: Request, res: Response): Promise<void> {
        const { keyword } = req.query
        if (!keyword) {
            res.status(400).json("No url provided").end()
            return
        }

        const peoples = await SwapiService.searchPeople(keyword.toString())
        const planets = await SwapiService.searchPlanets(keyword.toString())
        const films = await SwapiService.searchFilms(keyword.toString())
        const species = await SwapiService.searchSpecies(keyword.toString())
        const vehicles = await SwapiService.searchVehicles(keyword.toString())
        const starships = await SwapiService.searchStarships(keyword.toString())
        const results = [...peoples, ...planets, ...films, ...species, ...vehicles, ...starships]

        res.json(results).end()
    }
}