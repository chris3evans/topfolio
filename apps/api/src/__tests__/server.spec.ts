import express = require('express');
const router = require('../router') 
const supertest = require('supertest');
const model = require('../schemas/user');
const mongoose = require('mongoose');
import { errorHandler } from "../middleware/error.middleware";
import { environment } from "../environments/environment"

describe('server intergration tests', () => { 

  const app = express();
  app.use(express.json())
  app.use(router)
  app.use(errorHandler);
  const request = supertest(app)

  beforeAll(async () => { 
    await mongoose.connect(environment.Test_db, { useNewUrlParser: true })
    await model.remove()
  })

  afterEach(async () => { 
    await model.remove()
  })

  const headers = {'Authorization': `Bearer ${environment.Test_token}`}
  const user = {
    userId: "123",
    slug_url: "1234",
    name: "bob",
  };

  it('should be able to create a user', async () => {
    await request.post('/user').set(headers).send(user)
    const found = await model.findOne({ name: "bob" })
    expect(found.slug_url).toBe('1234')
   })

  it('shouldnt be able to create a user twice', async () => {
    await request.post('/user').set(headers).send(user)
    const res = await request.post('/user').set(headers).send(user)
    expect(res.status).toEqual(202)
   })
  

  it('should return user if user exists', async () => {
    await request.post('/user').set(headers).send(user)
    const res = await request.get('/user/1234')
    expect(res.body.data.name).toEqual('bob')
   })
  
  it('should return error if user doesnt exist', async () => {
    const res = await request.get('/user/1234')
    expect(res.body.message).toEqual("User Not found")
   })
  
  it('should update user', async () => {
    const res = {
      "userId": "123",
      "slug_url": "12",
      "name": "bob"
    }
    await request.post('/user').set(headers).send(user)
    const data = await request.put('/user').set(headers).send(res)
    console.log(data)
    expect(data.body.data.slug_url).toEqual('12')
  })

  it('shouldnt be able to update user that doesnt exist', async () => {
    const data = await request.put('/user').set(headers).send()
    expect(data.body.message).toEqual("User doesn't exist")
  })
  
})