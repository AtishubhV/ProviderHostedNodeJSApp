"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// our imports come from the -commonjs libs
const nodejs_commonjs_1 = require("@pnp/nodejs-commonjs");
const sp_commonjs_1 = require("@pnp/sp-commonjs");
const settings_1 = require("./settings");
const express = require("express");
const path = require("path");
// we call setup to use the node client
sp_commonjs_1.sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new nodejs_commonjs_1.SPFetchClient(settings_1.default.testing.sp.url, settings_1.default.testing.sp.id, settings_1.default.testing.sp.secret);
        },
    },
});
const port = process.env.PORT || "3000";
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.get('/', async function (req, res) {
    const w = await sp_commonjs_1.sp.web();
    console.log(JSON.stringify(w, null, 2));
    res.render("index", { title: w.Title });
    //res.send('Site Title' + w.Title);
});
app.listen(port, function () {
    console.log('App is listening on port 3000!');
});
//# sourceMappingURL=index.js.map