import { Router } from 'express';
import { NoticeView } from '../view/NoticeView';

export class NoticeRouter {
    public router: Router;
    private readonly noticeView: NoticeView;

    constructor() {
        this.router = Router();
        this.noticeView = new NoticeView();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        // Ruta: /notice
        this.router.get('/', (req, res) => {
            const viewData = this.noticeView.renderList();
            res.render('components/notice/notice', viewData);
        });

        // Ruta: /notice/:id
        this.router.get('/:id', (req, res) => {
            const noticeId = Number.parseInt(req.params.id);
            const viewData = this.noticeView.renderDetail(noticeId);
            
            if (!viewData.notice) {
                return res.status(404).render('errors/404');
            }
            
            res.render('components/notice/detail', viewData);
        });
    }
}