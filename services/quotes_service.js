import * as data_source from '../data/quotes_data_source.js';

export async function getAllQuotes() {
    return await data_source.getAllQuotes();
}

export async function getQuote(id) {
    return await data_source.getQuote(id);
}

export async function createQuote(quote) {
    let newQuote = await data_source.createQuote(quote);
    return newQuote;
}

export async function updateQuote(id, quote) {
    return await data_source.updateQuote(id, quote);
}

export async function deleteQuote(id) {
    return await data_source.deleteQuote(id);
}