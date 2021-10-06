import { Application } from 'express'
import { SearchController } from '../controller/search'

const Routes = (app: Application) => {
    app.get('/', SearchController.search)
}

export default Routes