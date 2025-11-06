import { Request, Response } from "express";
import ejs from "ejs";
import path from "node:path";
import AboutModel from "../model/AboutModel";

export default class AboutView {
    private readonly model: AboutModel;

    constructor() {
        this.model = new AboutModel();
    }

    public readonly renderAbout = async (_req: Request, res: Response): Promise<void> => {
        const aboutData = this.model.getAboutData();

        const aboutHTML = await ejs.renderFile(
            path.join(__dirname, "../template/about.ejs"),
            { aboutData }
        );

        res.render("layout", {
            title: "About",
            body: aboutHTML,
        });
    };
}
