import express, { Application } from 'express'
import path from 'node:path'

import MenuRouter from './menu/router/MenuRouter'
import MenuView from './menu/view/MenuView'

import ErrorRouter from './error/router/ErrorRouter'
import ErrorView from './error/view/ErrorView'

import NoticiasRouter from './notice/router/NoticiasRouter';
import NoticiasView from './notice/view/NoticiasView';

import AboutRouter from './about/router/AboutRouter';
import AboutView from './about/view/AboutView';



export default class Server {
    private readonly app: Application

    constructor(
        private readonly menuRouter: MenuRouter,
        private readonly errorRouter: ErrorRouter,
        private readonly noticiasRouter: NoticiasRouter,
        private readonly aboutRouter: AboutRouter

    ) {
        this.app = express()
        this.configure()
        this.static()
        this.routes()
    }

    private readonly configure = (): void => {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.set('view engine', 'ejs');
        this.app.set('views', [
            path.join(__dirname, './menu/template'),
            path.join(__dirname, './error/template'),
            path.join(__dirname, './notice/template'),
            path.join(__dirname, './about/template')
        ]);
    }

    private readonly routes = (): void => {
        this.app.use('/', this.menuRouter.router)
        this.app.use('/noticias', this.noticiasRouter.router);
        this.app.use('/about', this.aboutRouter.router);
        this.app.use('/{*any}', this.errorRouter.router)
        this.app.use('/noticias/:id', this.noticiasRouter.router);
    }

    private readonly static = (): void => {

        this.app.use(express.static(path.join(__dirname, './')));
        this.app.use('/images', express.static(path.join(__dirname, '../database/images')));

    }

    readonly start = (): void => {
        const port = 1888
        const host = 'localhost'
        this.app.listen(port, () => {
            console.log(`Server is running on http://${host}:${port}`)
        })
    }
}

const server = new Server(
    new MenuRouter(new MenuView()),
    new ErrorRouter(new ErrorView()),
    new NoticiasRouter(new NoticiasView()),
    new AboutRouter(new AboutView())

)
server.start()
