import fs from "node:fs";
import path from "node:path";
import { NoticeInterface } from "../types/NoticeInterface";

export default class NoticiasModel {

    private readonly filePath = path.join(__dirname, "../../../database/noticias.json");

    getPaginatedNoticias(page: number, perPage: number): { noticias: NoticeInterface[]; total: number } {
        const allNoticias = this.getAllNoticias();

        const total = allNoticias.length;
        const start = (page - 1) * perPage;
        const end = start + perPage;
        const noticias = allNoticias.slice(start, end);

        return { noticias, total };
    }

    getNoticiaById(id: number): NoticeInterface | null {
        const allNoticias = this.getAllNoticias();
        return allNoticias.find(n => n.id === id) || null;
    }

    getAllNoticias(): NoticeInterface[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const jsonData = JSON.parse(data);
        return jsonData.noticias as NoticeInterface[];
    }
}
