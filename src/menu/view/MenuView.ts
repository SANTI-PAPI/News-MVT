// src/menu/view/MenuView.ts
import { Request, Response } from "express";
import path from "node:path";

export class MenuView {
    static renderMain(_req: Request, res: Response) {
        const viewPath = path.join(__dirname, "../template/menu.ejs");

        const data = {
            title: "Noticias - Portal Principal",
            user: "Invitado", // luego puedes cambiar esto si hay sesión
        };

        res.render(viewPath, data);
    }
}
