
export async function getAllQuotes(req, res, next) {
    res.send('List of quotes');
}

export async function getQuote(req, res, next) {
    res.send(`Quote with id: ${req.params.id}`);
}

export async function deleteQuote(req, res, next) {
    res.send(`Delete quote with id: ${req.params.id}`);
}