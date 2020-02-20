const authController = {};
const db = require('../models/RecycleModel')

/* post users into database */
authController.postUsers = (req, res, next) => {
    console.log('postUser controller req.body', req.body)
    const { username, password, brownie_points } = req.body
    const text = `
    INSERT INTO "Users" (username, password, brownie_points, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *
    `

    const values = [username, password, brownie_points]
    console.log('the values from postUser in controller', values)


    db.query(text, values)
    .then(result => {
        console.log('the result in user post query', result)
        res.locals.data = result.rows
        return next()
    })
    .catch(err => next(err))
}


/* get users from database */
authController.getUsers = (req, res, next) => {
    console.log('getUser controller res', res)
    const text = `
       SELECT * FROM "Users"
       ` 
   
   db.query(text)
   .then(result => {
       console.log('the result in user get query', result)
       res.locals.data = result.rows
       return next()
   }) 
   .catch(err => next(err))
}


/* delete users from database */
authController.deleteUsers = (req, res, next) => {
    //console.log('deleteUser controller req.body', req.params)
    const id = req.params.id

    const values = [id]
    //console.log('the values from deleteUser in controller', values)

    const text = `
        DELETE FROM "Users"
        WHERE user_id = ($1);
        `
    
    db.query(text, values)
    .then(result => {
        //console.log('the result in user delete query', result)
        return next()
    })
    .catch(err => next(err))
}

module.exports = authController