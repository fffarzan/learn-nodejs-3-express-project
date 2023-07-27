const friendsModel = require('../models/friends.model');

function getFriends(req, res) {
  res.json(friendsModel);
}

function getFriend(req, res) {
  const friendIndex = +req.params.friendId;
  const friend = friendsModel[friendIndex];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    });
  }
  const newFriend = { name: req.body.name, id: friendsModel.length };
  friendsModel.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend
};