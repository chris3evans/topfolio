import express = require('express');
const { getuser, addUser, updateUser } = require('../models/user');

const userInfo = async (req: express.Request, res: express.Response) => {
  try {
    const { userId } = req.params;
    const data = await getuser(userId); //function to try find user with id as param

    if (data) {
      res.status(200);
      res.send({ status: 'success', data: data });
    } else {
      res.status(404);
      res.send({ status: 'error', message: 'User Not found' });
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ status: 'error', message: error });
  }
};

const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const userId = req.auth.payload.sub;
    console.log("TOKUSER ID:", userId);
    const newdata = req.body;
    console.log(req.body, 'req.body');
    const data = await getuser(newdata.userId); //function to try find user with id as param
    if (!data) {
      const user = await addUser(newdata); //create user here with newdata and id for params
      res.status(201);
      res.send({ status: 'success', data: user });
    } else {
      res.status(201);
      res.send({ status: 'error', message: 'User already exists' });
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ status: 'error', message: error });
  }
};

const saveUser = async (req: express.Request, res: express.Response) => {
  try {
    const { userId } = req.params;
    const data = await getuser(userId); //function to try find user with id as param
    if (data) {
      let newdata = req.body;
      await updateUser(newdata, userId); //update user here with newdata and id as params
      const user = await getuser(userId);
      res.status(200);
      res.send({ status: 'success', data: user });
    } else {
      res.status(404);
      res.send({ status: 'error', message: "User doesn't exist" });
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ status: 'error', message: error });
  }
};

module.exports = { userInfo, createUser, saveUser };
