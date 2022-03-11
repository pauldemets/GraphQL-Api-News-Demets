const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    countries: store.collection('list_pays'),
    languages: store.collection('list_langues'),
    themes: store.collection('list_themes'),
    sourcesScrap: store.collection('list_sources_scrap'),
    sources: store.collection('list_sources'),
    newsArticles: store.collection('newsArticles')
};