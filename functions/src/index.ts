import * as functions from 'firebase-functions';
import { router } from "./router/router";
import { ErrorContent, ErrorContentInstance } from './view-model/error-viewmodel';

const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors')
// var port = '3000';
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for (const route of router) {
    app.use(route.getPrefix(), route.getRouter())
}

app.use(function (req:any, res:any, next:any) {
    next(createError(404));
});

app.use(function (err:any, req:any, res:any, next:any) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    let errorContent: ErrorContent = new ErrorContentInstance(err)
    res.json(errorContent);
});

exports.api = functions.https.onRequest(app);


