
let quotes = [
    {
        id: 1,
        description: 'New Year ke liye nahi jaa rahe hai par new year hai tabhi',
        author: 'Mahesh Gupta'
    },
    {
        id: 2,
        description: 'You do you',
        author: 'Cyril Pillai'
    },
    {
        id: 3,
        description: 'Main available hu',
        author: 'Devendra Mehra'
    }
]

export async function getAllQuotes() {
    return quotes;
}

export async function getQuote(id) {
    return quotes.find(q => q.id == id);
}

export async function createQuote(quote) {
    quote.id = quotes.length + 1;
    let newQuote = { id: quotes.length + 1, ...quote };
    quotes.push(newQuote);
    return newQuote;
}

export async function updateQuote(id, quote) {
    const quoteIndex = quotes.findIndex(q => q.id == id);
    if (quoteIndex > -1) {
        const newQuote = { id: id, ...quote };
        quotes[quoteIndex] = newQuote;
        return newQuote;
    }
}

export async function deleteQuote(id) {
    const quoteIndex = quotes.findIndex(q => q.id == id);
    if (quoteIndex > -1) {
        const quote = quotes[quoteIndex];
        quotes.splice(quoteIndex, 1);
        return quote;
    }
}