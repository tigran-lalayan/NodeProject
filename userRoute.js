const express = require('express');
const Router = express.Router();
const User = require('./User');
const {
    validateUserData,
    validateOffsetAndLimit,
} = require('./validate');



//source: https://www.w3resource.com/mongodb/mongodb-skip-limit.php


Router.get('/', validateOffsetAndLimit, async (req, res) => { //Get all Users
    try {
      const { offset, limit } = req.query;
      const Users = await User.find().skip(offset).limit(limit);
      res.json({ Users });
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  Router.get('/email', async (req, res) => { //Get User by email
    try {
      const { email } = req.query;
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: 'No user found with that email' });
      }
      res.json(user);
    } catch (err) {
      res.json({ message: err });
    }
  });

  Router.get('/sorted', async (req, res) => { //Get all the users sorted
    try {
      const sortCriteria = req.query.sortBy || 'username';
      const sortOrder = req.query.orderBy === 'desc' ? -1 : 1;
      const users = await User.find().sort({ [sortCriteria]: sortOrder });
      res.json({ users });
    } catch (err) {
      res.json({ message: err });
    }
  });


Router.get('/:UserID', async (req, res) => { //Get User by ID
    try {
      const { UserID } = req.params;
      const user = await User.findById(UserID);
      if (!user) {
        return res.json({ message: 'No user found with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  Router.post('/', validateUserData, async (req, res) => { //Post a new User
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.json({ message: 'A user with that email already exists' });
      }
      const user = new User(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      res.json({ message: err });
    }
  });
  
  Router.delete('/:UserID', async (req, res) => { //Delete an User
    try {
      const { UserID } = req.params;
      const removedUser = await User.findByIdAndRemove(UserID);
      if (!removedUser) {
        return res.json({ message: 'No user found with that ID' });
      }
      res.json({ message: 'User successfully removed' });
    } catch (err) {
      res.json({ message: err });
    }
  });

  Router.put('/:UserID', validateUserData, async (req, res) => { //Update an User
    try {
      const { UserID } = req.params;
      const updatedUser = await User.findByIdAndUpdate(UserID, req.body, { new: true });
      if (!updatedUser) {
        return res.json({ message: 'No user found with that ID' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.json({ message: err });
    }
  });


module.exports = Router;