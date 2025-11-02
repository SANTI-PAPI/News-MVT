import { MenuModel } from '../model/MenuModel';
import { MenuInterface } from '../types/MenuInterface';

export class MenuView {
    private readonly model: MenuModel;

    constructor() {
        this.model = new MenuModel();
    }

    render(): { menuItems: MenuInterface[] } {
        const menuItems = this.model.getMenuItems();
        return { menuItems };
    }

    renderDetail(menuId: number): { menuItem: MenuInterface | undefined } {
        const menuItem = this.model.getMenuItemById(menuId);
        return { menuItem };
    }
}