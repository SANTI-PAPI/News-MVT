import { NoticeInterface } from '../types/NoticeInterface';
import * as fs from 'node:fs';
import * as path from 'node:path';

export class NoticeModel {
    private readonly dataPath = path.join(__dirname, '../../../../data/notices.json');
    
    getNotices(): NoticeInterface[] {
        try {
            const data = fs.readFileSync(this.dataPath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error loading notices data:', error);
            return [];
        }
    }
    
    getNoticeById(id: number): NoticeInterface | undefined {
        const notices = this.getNotices();
        return notices.find(notice => notice.id === id);
    }
}