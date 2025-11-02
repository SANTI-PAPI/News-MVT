import { Router } from 'express';
import { MenuRouter } from '../menu/router/MenuRouter';
import { NoticeRouter } from '../notice/router/noticeRouter';

export class AppRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        const menuRouter = new MenuRouter();
        const noticeRouter = new NoticeRouter();

        // Importar rutas de componentes
        this.router.use('/menu', menuRouter.router);
        this.router.use('/notice', noticeRouter.router);
        
        // Ruta principal redirige a menu
        this.router.get('/', (req, res) => {
            res.redirect('/menu');
        });

        // Manejo de rutas no encontradas (404)
        this.router.use('*', (req, res) => {
            res.status(404).render('errors/404');
        });
    }
}