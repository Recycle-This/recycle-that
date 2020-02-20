const authController = {};
const db = require('../models/RecycleModel')

/* post users into database */
authController.postUsers = (req, res, next) => {
    const { username, password, brownie_points } = req.body
    const text = `
    INSERT INTO "Users" (username, password, brownie_points, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *
    `

    const values = [username, password, brownie_points]


    db.query(text, values)
    .then(result => {
        res.locals.data = result.rows
        return next()
    })
    .catch(err => next(err))
}


/* get users from database */
authController.getUsers = (req, res, next) => {
    const text = `
       SELECT * FROM "Users"
       ` 
   
   db.query(text)
   .then(result => {
       res.locals.data = result.rows
       return next()
   }) 
   .catch(err => next(err))
}


/* delete users from database */
authController.deleteUsers = (req, res, next) => {
    const id = req.params.id

    const values = [id]

    const text = `
        DELETE FROM "Users"
        WHERE user_id = ($1);
        `
    
    db.query(text, values)
    .then(result => {
        return next()
    })
    .catch(err => next(err))
}

module.exports = authController