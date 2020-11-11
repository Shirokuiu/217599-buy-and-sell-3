'use strict';

const {Router} = require('express');
const {searchExist} = require('../middlewares');
const {Offers} = require('../api');
const {HTTPCodes} = require('../../constants');

const searchRouter = new Router();

searchRouter.get('/', searchExist(new Offers()), (req, res) => {
  const {definedOffers} = res.locals;

  res.status(HTTPCodes.Ok).render('search-result', {definedOffers});
});

module.exports = searchRouter;
