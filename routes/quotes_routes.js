import express from 'express';
import * as controller from '../controllers/quotes_controller.js';

var router = express.Router();

router.get('/', controller.getAllQuotes);

router.get('/:id', controller.getQuote);

router.post('/', controller.createQuote);

router.put('/:id', controller.updateQuote);

router.delete('/:id', controller.deleteQuote);

export default router;
