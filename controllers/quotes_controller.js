import validator from '../validators/quotes_validator.js';
import * as service from '../services/quotes_service.js';

export async function getAllQuotes(req, res) {
    const quotes = await service.getAllQuotes();
    res.send(quotes);
}

export async function getQuote(req, res) {
    const quote = await service.getQuote(req.params.id);
    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send();
    }
}

export async function createQuote(req, res) {
    const validation = validator(req.body);
    if (validation.success === true) {
        delete validation.success;
        const newQuote = await service.createQuote(validation);
        res.send(newQuote);
    } else {
        delete validation.success;
        res.status(400).send(validation);
    }
}

export async function updateQuote(req, res) {
    const validation = validator(req.body);
    if (validation.success === true) {
        delete validation.success;
        const newQuote = await service.updateQuote(req.params.id, validation);
        if(newQuote.success === true) {
            res.send(newQuote);
        } else {
            if(newQuote.code === 4001) {
                delete newQuote.success;
                res.status(404).send(newQuote);
            } else {
                res.status(500).send('unknown error');
            } 
        }
    } else {
        delete validation.success;
        res.status(400).send(validation);
    }
}

export async function deleteQuote(req, res) {
    const quote = await service.deleteQuote(req.params.id);
    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send();
    }
}

