
import * as bodyParser from 'body-parser';

import loggerMiddleware from './middleware/logger'

import App from './app';
import PostsController from './controllers/post.controller'
import HomeController from './controllers/home.controller'
// we call setup to use the node client


const app = new App({
    // port: 3000,
    port: 42304,
    controllers: [
        new HomeController(),
        new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()