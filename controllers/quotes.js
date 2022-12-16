
export async function getAllQuotes(req, res, next) {
    res.send('Get all quotes');
}

export async function getQuote(req, res, next) {
    res.send(`Get quote with id: ${req.params.id}`);
}

export async function createQuote(req, res, next) {
    res.send(`Add quote with description: ${req.body.description}`);
}

export async function updateQuote(req, res, next) {
    res.send(`Update quote with id: ${req.params.id} with ${req.body.description}`);
}

export async function deleteQuote(req, res, next) {
    res.send(`Delete quote with id: ${req.params.id}`);
}