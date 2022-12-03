import express = require('express');
const { getuser, addUser, updateUser, getUserByUrl } = require('../models/user');

const userInfo = async (req: express.Request, res: express.Response) => {
  try {
    const { slug_url } = req.params;
    const data = await getUserByUrl(slug_url); //function to try find user by slug_url

    if (data) {
      res.status(200);
      res.send({ error: '', data });
    } else {
      res.status(404);
      res.send({ error: 'User Not found', data: {} });
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ error, data: {} });
  }
};


const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const userId = req.auth.payload.sub;
    console.log('USER ID:', userId);
    const newdata = req.body;
    newdata.userId = userId;
    console.log(req.body, 'req.body');
    const data = await getuser(userId); //function to try find user with id as param
    if (!data) {
      const user = await addUser(newdata); //create user here with newdata and id for params
      res.status(201);
      res.send({ error: '', data: user }); //{ status: 'success', data: user }
    } else {
      res.status(202);
      res.send({ error: '', data }); //{ status: 'Success: user already exists', data:data }
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ error, data: {} });
  }
};

const saveUser = async (req: express.Request, res: express.Response) => {
  try {
    const userId = req.auth.payload.sub;
    const data = await getuser(userId); //function to try find user with id as param
    if (data) {
      let newdata = req.body;
      newdata.userId = userId;
      await updateUser(newdata, userId); //update user here with newdata and id as params
      const user = await getuser(userId);
      res.status(200);
      res.send({ error: '', data: user });
    } else {
      res.status(404);
      res.send({ error: "User doesn't exist", data: {} });
    }
  } catch (error) {
    console.log('error: ' + error);
    res.status(500);
    res.send({ error, data: {} });
  }
};

module.exports = { userInfo, createUser, saveUser };
