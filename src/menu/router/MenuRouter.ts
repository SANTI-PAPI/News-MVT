import { Router } from 'express';
import { MenuView } from '../view/MenuView';

export class MenuRouter {
    public router: Router;
    private readonly menuView: MenuView;

    constructor() {
        this.router = Router();
        this.menuView = new MenuView();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        // Ruta: /menu
        this.router.get('/', (req, res) => {
            const viewData = this.menuView.render();
            res.render('components/menu/menu', viewData);
        });

        // Ruta: /menu/:id
        this.router.get('/:id', (req, res) => {
            const menuId = Number.parseInt(req.params.id);
            const viewData = this.menuView.renderDetail(menuId);
            res.render('components/menu/detail', viewData);
        });
    }
}