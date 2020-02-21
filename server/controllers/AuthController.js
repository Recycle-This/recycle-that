const authController = {};
const db = require('../models/RecycleModel')


/* login verify */
authController.loginUsers = (req, res, next) => {
    User.findOne({username : req.body.username, password : req.body.password}, (err, result) => {
        if (err){
            res.locals.data = req.body.id
          } else  {
            res.locals.data = 'user does not exist'
          }
        return next()
    })
}


/* post users into database */
authController.postUsers = (req, res, next) => {
    const { username, password, brownie_points } = req.body
    console.log('req body: ', req.body)
    const text = `
    INSERT INTO "Users" (username, password, brownie_points, created_at)
    VALUES ($1, $2, $3, NOW())
    RETURNING *
    `
    console.log(username)
    const values = [username, password, brownie_points]


    db.query(text, values)
    .then(result => {
        res.locals.data = result.rows
        console.log("res post query", result.rows)
        return next()
    })
    .catch(err => next({
        log: `ERROR: Error in AuthController.postUsers: ${err}`,
        status: 400,
        message: { err: 'An error occurred' },
      }))
}


/* get users from database */
authController.getUsers = (req, res, next) => {
    const id = req.params.id
    const values = [id]

    const text = `
       SELECT * FROM "Users"
       WHERE user_id = ($1)
       ` 
   
   db.query(text, values)
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