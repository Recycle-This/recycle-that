const searchController = {};
const db = require('../models/RecycleModel')

/* post data from search bar in database */
searchController.postSearch = (req, res, next) => {
    const { search_words, favorite_search, url, description, user_id, count_searches } = req.body
    const text = `
    INSERT INTO "Search" (search_words, favorite_search, url, description, user_id, count_searches, date_searched)
    VALUES ($1, $2, $3, $4, $5, $6, NOW())
    RETURNING *;
    `

    const values = [search_words, favorite_search, url, description, user_id, count_searches]

    db.query(text, values)
    .then(result => {
        res.locals.data = result.rows
        return next()
    })
    .catch(err => next(err))
}

/* get seach word data from database */
searchController.getSearch = (req, res, next) => {
    const id = req.params.id
    const values = [id]

    const text = `
       SELECT * FROM "Search" 
       WHERE user_id = ($1)
       ` 

   db.query(text, values)
    .then(result => {
       res.locals.data = result.rows
       console.log('fetch res', res.locals.data)
       return next()
   }) 
   .catch(err => next(err))
}


/* delete seach word data from database */
searchController.deleteSearch = (req, res, next) => {
        const id = req.params.id

        const values = [id]
    
        const text = `
            DELETE FROM "Search"
            WHERE search_id = ($1);
            `
        
        db.query(text, values)
        .then(result => {
            return next()
        })
        .catch(err => next(err))
}

module.exports = searchController