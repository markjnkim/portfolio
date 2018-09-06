const db = require('../models')

module.exports = app => {
  app.get('/messages', (req, res) =>
    db.Message
      .find()
      .then( dbMessages => res.json(dbMessages))
      .catch( err => res.json(err))
  )

  app.post("/submit", (req, res) => {
    // Create a new user using req.body
    db.Message.create(req.body)
      .then( dbMessage => {
        // If saved successfully, send the the new User document to the client
        console.log(dbMessage);
        return res.redirect('/index');
      })
      .catch( err => {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
}
