import { Request, Response } from "express";
import NoticiasModel from "../model/NoticiasModel";
import ejs from "ejs";
import path from "node:path";

export default class NoticiasView {
    private readonly model: NoticiasModel;

    constructor() {
        this.model = new NoticiasModel();
    }

    public readonly renderNoticias = async (req: Request, res: Response): Promise<void> => {
        const page = req.query["page"] ? Number.parseInt(req.query["page"] as string, 10) : 1;
        const perPage = 10;

        const { noticias, total } = this.model.getPaginatedNoticias(page, perPage);
        const totalPages = Math.ceil(total / perPage);

        const noticiasHTML = await ejs.renderFile(
            path.join(__dirname, "../template/noticias.ejs"),
            { noticias, totalPages, page }
        );

        res.render("layout", {
            title: "Noticias",
            body: noticiasHTML,
        });
    };

    public readonly renderNoticiaDetalle = async (req: Request, res: Response): Promise<void> => {
        const id = req.params["id"] ? Number.parseInt(req.params["id"], 10) : 0;
        const noticia = this.model.getNoticiaById(id);

        if (!noticia) {
            res.status(404).send("Noticia no encontrada");
            return;
        }

        const detalleHTML = await ejs.renderFile(
            path.join(__dirname, "../template/noticiaDetalle.ejs"),
            { noticia }
        );

        res.render("layout", {
            title: noticia.titulo,
            body: detalleHTML,
        });
    };
    public readonly renderBusqueda = async (req: Request, res: Response): Promise<void> => {
        const query = (req.query["q"] as string) || "";
        const noticias = this.model.searchNoticias(query);

        const busquedaHTML = await ejs.renderFile(
            path.join(__dirname, "../template/busqueda.ejs"),
            {
                noticias,
                query,
                total: noticias.length
            }
        );

        res.render("layout", {
            title: `Búsqueda: ${query}`,
            body: busquedaHTML,
        });
    };
}