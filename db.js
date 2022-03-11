const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    countries: store.collection('list_pays'),
    languages: store.collection('list_langues')
};