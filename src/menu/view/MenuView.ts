// src/menu/view/MenuView.ts
import { Request, Response } from "express";
import path from "node:path";
import { MenuModel } from "../model/MenuModel";

export default class MenuView {
    renderMain = (_req: Request, res: Response): void => {
        const menuItems = MenuModel.getMenuItems();

        res.render(path.join(__dirname, "../template/menu.ejs"), {
            title: "Portal de Noticias",
            menu: menuItems,
        });
    };
}
