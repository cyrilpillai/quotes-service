import express from 'express';
import * as quotesController from '../controllers/quotes.js';

var router = express.Router();

router.get('/', quotesController.getAllQuotes);

router.get('/:id', quotesController.getQuote);

router.post('/', quotesController.createQuote);

router.put('/:id', quotesController.updateQuote);

router.delete('/:id', quotesController.deleteQuote);

export default router;
