import { Router } from "express";
import AboutView from "../view/AboutView";

export default class AboutRouter {
    public readonly router: Router;

    constructor(private readonly aboutView: AboutView) {
        this.router = Router();
        this.routes();
    }

    private readonly routes = (): void => {
        this.router.get("/", this.aboutView.renderAbout);
    };
}
