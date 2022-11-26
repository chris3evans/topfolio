const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const User = require('../models/user');

const mongoose = require('mongoose');
const databaseName = 'test';

describe('server intergration tests', () => { 

  const app = express();
  app.use(express.json())
  app.use(router)
  const request = supertest(app)

  beforeAll(async () => { 
    const url = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(urk, {useNewUrlParser: true})
  })

  afterEach(async () => { 
    await User.deletemany()
  })

  it('should be able to create a user', async (done) => {

    done()
   })

  it('shouldnt be able to create a user twice', async (done) => {

    done()
   })
  
  it('should return 201 if user exists', async (done) => {

    done()
   })
  
  it('should return 202 if user doesnt exist', async (done) => {

    done()
   })
  
  it('should update user', async (done) => {

    done()
  })

  it('shouldnt be able to update user that doesnt exist', async (done) => {

    done()
  })
  
})