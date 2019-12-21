const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/post/:id', (req, res) => {
            const actualPage = "/post";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/portfolio-detail/:id', (req, res) => {
            const actualPage = "/portfolio-detail";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/blog-detail/:id', (req, res) => {
            const actualPage = "/blog-detail";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
        })
    })
    .catch((ex) => {
        process.exit(1)
    });