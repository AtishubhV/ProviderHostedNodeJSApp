import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import sp from '../spsetup';
class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes();

    }

    public initRoutes() {
        this.router.get('/', this.index)
        this.router.post('/', this.index)

    }

    index = async (req: Request, res: Response) => {

        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]

        const w = await sp.web();
        console.log(JSON.stringify(w, null, 2));
        //res.render("index", { title: w.Title });
        res.render('home/index', { users, title: w.Title, url: w.Url })
    }
}

export default HomeController