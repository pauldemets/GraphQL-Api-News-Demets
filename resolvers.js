const db = require('./db');
const { Router } = require('express');

const Query = {
    countries: () => db.countries.list(),
    languages: () => db.languages.list(),
    themes: () => db.themes.list(),
    sourcesScrap: () => db.sourcesScrap.list(),
    sources: () => db.sources.list(),
    newsArticles: () => db.newsArticles.list()
}



const Language = {
    themesByLanguage: (root) => {
        return db.themes.list().filter(function (item) {
            return root.token === item.code_langue;
        });
    },
    sourcesScrapByLanguage: (root) => {
        return db.sourcesScrap.list().filter(function (item) {
            const source = db.sources.list().find((source) =>
                source.token == item.token_source
            );
            return source.token_langue == root.token;
        });
    },
    newsArticlesByLanguage: (root) => {
        return db.newsArticles.list().filter(function (item) {
            const sourceScrap = db.sourcesScrap.list().find((sourceScrap) =>
                sourceScrap.token == item.token_source_scrap
            );
            const source = db.sources.list().find((source) =>
                source.token == sourceScrap.token_source
            );
            return source.token_langue == root.token;
        });
    }
}

const Country = {
    sourcesScrapByCountry: (root) => {
        return db.sourcesScrap.list().filter(function (item) {
            const source = db.sources.list().find((source) =>
                source.token == item.token_source
            );
            return source.token_pays == root.pays;
        });
    },
    newsArticlesByCountry: (root) => {
        return db.newsArticles.list().filter(function (item) {
            const sourceScrap = db.sourcesScrap.list().find((sourceScrap) =>
                sourceScrap.token == item.token_source_scrap
            );
            const source = db.sources.list().find((source) =>
                source.token == sourceScrap.token_source
            );
            return source.token_pays == root.token;
        });
    },
}

const Theme = {
    newsArticlesByTheme: (root) => {
        return db.newsArticles.list().filter(function (item) {
            const sourceScrap = db.sourcesScrap.list().find((sourceScrap) =>
                sourceScrap.token == item.token_source_scrap
            );
            return sourceScrap.token_theme == root.token;
        });
    },
}



module.exports = { Query, Language, Country, Theme }