// src/menu/model/MenuModel.ts

export interface MenuItem {
    name: string;
    link: string;
}

export class MenuModel {
    static getMenuItems(): MenuItem[] {
        return [
            { name: "Inicio", link: "/" },
            { name: "Noticias", link: "/noticias" },
            { name: "Categorías", link: "/categorias" },
            { name: "About", link: "/About" }
        ];
    }
}
