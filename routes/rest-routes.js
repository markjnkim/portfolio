// const db = require("../models");

module.exports = function (app) {
  app.get('/about', (req, res) => res.send('about'))
  app.get('/blog', (req, res) => res.send('blog'))
  app.get('/contact', (req, res) => res.send('contact'))
  app.get('/resume', (req, res) => res.send('resume'))
  app.get('/index', (req, res) => res.send('index'))
  app.get('/elements', (req, res) => res.send('elements'))
  app.get('/', (req, res) => res.send('index'))

  // app.get("/messages/:id", (req, res) =>
  //     db.Article.findById(req.params.id)
  //         .populate("notes")
  //         .then(dbArticle => res.json(dbArticle))
  //         .catch(err => res.json(err))
  // );

  // // Route for grabbing a specific Article by id, populate it with it's note
  // app.get("/messages/:id", (req, res) =>
  //     db.Article.findById(req.params.id)
  //         .populate("notes")
  //         .then(dbArticle => res.json(dbArticle))
  //         .catch(err => res.json(err))
  // );

  // //Route for saving Article by ID
  // app.put("/messages/:id", (req, res) =>
  //     db.Article.findByIdAndUpdate(req.params.id, { $set: { saved: req.body.saved } }, { new: true })
  //         .then(dbArticle => res.json(dbArticle))
  //         .catch(err => res.json(err))
  // );

  // // Delete all
  // app.delete("/messages/clear", (req, res) =>
  //     db.Note.remove({})
  //         .then(dbNote => db.Article.remove({})
  //             .then(result => res.json(result))
  //             .catch(err => res.json(err))
  //         )
  // );
}
