const path = require('path');
const express = require('express');

const app = express();

/**
 * handle parsing request body
 */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
})

module.exports = app;
