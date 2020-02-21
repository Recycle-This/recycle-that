const path = require('path');
const bodyparser = require('body-parser')

const authController = require('./controllers/AuthController')
const searchController = require('./controllers/searchController')

const express = require('express')
const app = express()
const PORT = 3000

// app.use(bodyparser())
/**
 * handle parsing request body
 */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../App'))
// })
/* route for user login check */
app.post('/login', authController.loginUsers, (req, res) => {
  if (res.locals.data === 'user does not exist'){
    res.send(401)
  } else {
    res.status(200).json({user_id: res.locals.data})
  }
})



/* route for user post */
app.post('/users', authController.postUsers, (req, res) => {
  res.status(200).json(res.locals.data)
})
/* route for user get */
app.get('/users/:id', authController.getUsers, (req, res) => {
  res.status(200).json(res.locals.data)
})
/* route for user delete */
app.delete('/users/:id', authController.deleteUsers, (req, res) => {
  res.status(200).json({})
})


/* route for search post */
app.post('/search', searchController.postSearch, (req, res) => {
  res.status(200).json(res.locals.data)
})
/* route for search get */
app.get('/search/:id', searchController.getSearch, (req, res) => {
  res.json(res.locals.data)
})
/* route for search delete */
app.delete('/search:id', searchController.deleteSearch, (req, res) => {
  res.status(200).json({})
})


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`))


module.exports = app;
