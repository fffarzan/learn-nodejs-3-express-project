const path = require('path');
// paths in linux and mac: /folder/file.js
// paths in windows: \folder\file.js

function getMessages(req, res) {
  // res.send('<ul><li>Hello Albert!</li></ul>')
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'code-review.jpeg'));
  res.render('messages', {
    title: 'Messages to my friends!',
    friend: 'Elon Musk'
  })
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};