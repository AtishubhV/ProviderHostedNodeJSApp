import * as express from 'express'
import { Application } from 'express'
import path = require('path');
import https = require('https');
import fs = require('fs');

// This line is from the Node.js HTTPS documentation.
const options = {
    key: fs.readFileSync((path.join(__dirname + '/certs/ssl-cert-snakeoil.key'))),
    cert: fs.readFileSync((path.join(__dirname + '/certs/ssl-cert-snakeoil.pem')))
};
class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.assets()
        this.template()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    private assets() {


        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.set('views', path.join(__dirname, 'views'));


    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public listen() {
        https.createServer(options, this.app).listen(this.port, () => {
            console.log(`App listening on the https://localhost:${this.port}`)
        })
    }
}

export default App