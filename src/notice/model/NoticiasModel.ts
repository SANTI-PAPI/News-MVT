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

    searchNoticias(query: string): NoticeInterface[] {
        const allNoticias = this.getAllNoticias();
        const searchTerms = query.toLowerCase().trim().split(/\s+/); // Separa por espacios

        if (searchTerms.length === 0 || searchTerms[0] === '') {
            return allNoticias;
        }

        return allNoticias.filter(noticia => {
            const titulo = noticia.titulo.toLowerCase();
            const descripcion = noticia.descripcion.toLowerCase();
            const materia = noticia.materia.toLowerCase();
            const participantes = noticia.participantes.map(p => p.toLowerCase()).join(' ');

            return searchTerms.some(term => {
                return (
                    titulo.includes(term) ||
                    descripcion.includes(term) ||
                    materia.includes(term) ||
                    participantes.includes(term)
                );
            });
        });
    }
}
