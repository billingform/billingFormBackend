import { router } from "./router/router";

const createError = require('http-errors');
var express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var app = express();
var port = '3000';
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for (const route of router) {
    app.use(route.getPrefix(), route.getRouter())
}

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({ message: err.message, error: err });
});

// app.listen(port, () => {
//     console.log(`app listent on port ${port}`);
// })

// 因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || port, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
});


app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});

module.exports = app;
