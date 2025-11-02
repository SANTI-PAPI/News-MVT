import { Router } from 'express'    
import MenuView  from '../view/MenuView'

export default class ProductRouter {
    router: Router

    constructor(private readonly menuView: MenuView) {
        this.router = Router()
        this.routes()
    }

    readonly routes = () => {
        this.router.get('/v1.0/list', this.menuView.render)
    }
}
