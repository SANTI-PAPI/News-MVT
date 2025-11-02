import { Router, Request, Response } from 'express';
import { ErrorView } from '../view/ErrorView';

export class ErrorsRouter {
    public router: Router;
    private readonly errorView: ErrorView;

    constructor() {
        this.router = Router();
        this.errorView = new ErrorView();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        // Ruta específica para 404
        this.router.get('/404', (req: Request, res: Response) => {
            const viewData = this.errorView.render404();
            res.status(404).render('components/errors/404', viewData);
        });

        // Ruta para cualquier código de error
        this.router.get('/:code', (req: Request, res: Response) => {
            const errorCode = Number.parseInt(req.params.code);
            const viewData = this.errorView.renderError(errorCode);
            res.status(errorCode).render('components/errors/error', viewData);
        });
    }
}