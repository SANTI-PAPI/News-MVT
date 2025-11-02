import { NoticeModel } from '../model/NoticeModel';
import { NoticeInterface } from '../types/NoticeInterface';

export class NoticeView {
    private readonly model: NoticeModel;

    constructor() {
        this.model = new NoticeModel();
    }

    renderList(): { notices: NoticeInterface[] } {
        const notices = this.model.getNotices();
        return { notices };
    }

    renderDetail(noticeId: number): { notice: NoticeInterface | undefined } {
        const notice = this.model.getNoticeById(noticeId);
        return { notice };
    }
}