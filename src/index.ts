import express from 'express';
import path from 'node:path';
import { AppRouter } from './routes/appRouter';

export default class Server {
    public app: express.Application;
    private readonly router: AppRouter;

    constructor() {
        this.app = express();
        this.router = new AppRouter();
        this.configure();
        this.routes();
        this.staticFiles();
    }

    private readonly configure = (): void => {
        this.app.set('view engine', 'ejs');
        this.app.set('views', [
            path.join(__dirname, 'templates'),
            path.join(__dirname, 'components')
        ]);
    };

    private readonly routes = (): void => {
        this.app.use('/', this.router.router);
    };

    private readonly staticFiles = (): void => {
        this.app.use(express.static(path.join(__dirname, '../public')));
            this.app.use('/', express.static(path.join(__dirname, 'components')));

    };

    readonly start = (): void => {
        const port = 1888;
        const host = 'localhost';
        this.app.listen(port, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    }
}

// Iniciar servidor
const server = new Server();
server.start();