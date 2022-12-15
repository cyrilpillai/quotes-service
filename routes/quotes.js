import express from 'express';
import * as quotesController from '../controllers/quotes.js';

var router = express.Router();

router.get('/', quotesController.getAllQuotes);

router.get('/:id', quotesController.getQuote);

router.delete('/:id', quotesController.deleteQuote);

export default router;
