import { MenuInterface } from '../types/MenuInterface';
import * as fs from 'node:fs';
import * as path from 'node:path';

export class MenuModel {
    private readonly dataPath = path.join(__dirname, '../../../../data/menu.json');
    
    getMenuItems(): MenuInterface[] {
        try {
            const data = fs.readFileSync(this.dataPath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error loading menu data:', error);
            return [];
        }
    }

    getMenuItemById(id: number): MenuInterface | undefined {
        const items = this.getMenuItems();
        return items.find(item => item.id === id);
    }
}