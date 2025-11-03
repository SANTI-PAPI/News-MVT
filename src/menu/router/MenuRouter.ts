// src/menu/router/MenuRouter.ts
import { Router } from "express";
import MenuView from "../view/MenuView";

export default class MenuRouter {
    public readonly router: Router;

    constructor(private readonly view: MenuView) {
        this.router = Router();
        this.routes();
    }

    private readonly routes = (): void => {
        this.router.get("/", this.view.renderMain);
    };
}
