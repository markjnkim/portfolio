// const db = require("../models");
var path = require('path');

module.exports = app => {
  app.get('/about', (req, res) => res.send('about'))
  app.get('/blog', (req, res) => res.send('blog'))
  app.get('/contact', (req, res) => res.send('contact'))
  app.get('/elements', (req, res) => res.send('elements'))

  app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });

  app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'resume.html'))
  });
  app.get('/index', (req, res) => { 
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });
  app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });
}
