const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// get random quote
app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({
        quote: randomQuote
    });
});

// get all quotes
app.get('/api/quotes', (req, res) => {
    const person = req.query.person;
    if (person !== undefined) {
        const quotesByPerson = quotes.filter(quote => quote.person === person);
        res.send({
            quotes: quotesByPerson
        });
    } else {
        res.send({
            quotes: quotes
        });
    }
});

