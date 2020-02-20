const searchController = {};

/* post data from search bar in database */
searchController.postSearch = (req, res, next) => {
    //console.log('postSearch controller req.body', req.body)
    const { search_words, favorite_search, url, description } = req.body
    const text = `
    INSERT INTO "Search" (search_words, favorite_search, url, description, date_searched)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING *;
    `

    const values = [search_words, favorite_search, url, description]
    //console.log('the values from postSearch in controller', values)

    db.query(text, values)
    .then(result => {
        console.log('the result in search post query', result)
        res.locals.data = result.rows
        return next()
    })
    .catch(err => next(err))
}

/* get seach word data from database */
searchController.getSearch = (req, res, next) => {
    //console.log('getSearch controller res', res)
    const text = `
       SELECT * FROM "Search" 
       WHERE search_id = ($1)
       ` 

   db.query(text)
   .then(result => {
       //console.log('the result in search get query', result)
       res.locals.data = result.rows
       return next()
   }) 
   .catch(err => next(err))
}


/* delete seach word data from database */
searchController.deleteSearch = (req, res, next) => {
        //console.log('deleteSearch controller req.body', req.params)
        const id = req.params.id

        const values = [id]
        //console.log('the values from deleteUser in controller', values)
    
        const text = `
            DELETE FROM "Search"
            WHERE search_id = ($1);
            `
        
        db.query(text, values)
        .then(result => {
            //console.log('the result in search delete query', result)
            return next()
        })
        .catch(err => next(err))
}

module.exports = searchController