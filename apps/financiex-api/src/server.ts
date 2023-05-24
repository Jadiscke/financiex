import express from 'express';
import middlewares from './middlewares';


export const createServer = () => {
    const app = express();
    app.use(middlewares);

    app.get('/healthz', (req, res) => {
        res.send('Hello World!');
    })

    return app;
}
