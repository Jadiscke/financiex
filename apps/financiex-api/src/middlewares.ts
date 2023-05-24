import { NextFunction, Router, Response, Request } from 'express';
import bodyParser from 'body-parser';

const router = Router();
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
}
const corsHandler = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}

router.use(corsHandler);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));
router.use(errorHandler);



export default router;
