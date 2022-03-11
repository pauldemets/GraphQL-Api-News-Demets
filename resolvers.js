const db = require('./db');

const Query = {
    countries: () => db.countries.list(),
    languages: () => db.languages.list(),
}


module.exports = { Query }