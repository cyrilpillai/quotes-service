import validator from '../validators/quotes.js';

export async function getAllQuotes(req, res, next) {
    res.send('Get all quotes');
}

export async function getQuote(req, res, next) {
    res.send(`Get quote with id: ${req.params.id}`);
}

export async function createQuote(req, res, next) {
    const validation = validator(req.body);
    if (validation.success === true) {
        delete validation.success;
        res.send(validation);
    } else {
        delete validation.success;
        res.status(400).send(validation);
    }
}

export async function updateQuote(req, res, next) {
    const validation = validator(req.body);
    if (validation.success === true) {
        delete validation.success;
        res.send(validation);
    } else {
        delete validation.success;
        res.status(400).send(validation);
    }
}

export async function deleteQuote(req, res, next) {
    res.send(`Delete quote with id: ${req.params.id}`);
}

