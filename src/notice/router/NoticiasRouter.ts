import { Router } from "express";
import NoticiasView from "../view/NoticiasView";

export default class NoticiasRouter {

    public readonly router: Router;

    constructor(private readonly NoticiasView: NoticiasView) {
        this.router = Router();
        this.routes();
    }
    private readonly routes = (): void => {
        this.router.get("/", this.NoticiasView.renderNoticias);
        this.router.get("/buscar", this.NoticiasView.renderBusqueda)
        this.router.get("/:id", this.NoticiasView.renderNoticiaDetalle.bind(this.NoticiasView));

    }
}