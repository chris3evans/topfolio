import express = require('express');
const router = require('../router') 
const supertest = require('supertest');
const model = require('../schemas/user');
const mongoose = require('mongoose');
const databaseName = 'test';
import { errorHandler } from "../middleware/error.middleware";

describe('server intergration tests', () => { 

  const app = express();
  app.use(express.json())
  app.use(router)
  app.use(errorHandler);
  const request = supertest(app)
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InlHR2c5bmFFWkpISlBaaVFDZ21UNyJ9.eyJpc3MiOiJodHRwczovL2Rldi1vbmJkdDhjM3ozam5tN3JrLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzg3NDMwMzY3YWQzZTA5MDMwY2UyYzQiLCJhdWQiOlsiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImh0dHBzOi8vZGV2LW9uYmR0OGMzejNqbm03cmsudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY2OTk2OTkwMCwiZXhwIjoxNjcwMDU2MzAwLCJhenAiOiJyUWtBWW9QSkt3cnZZUkpJVGxVb09jemxnRUFxTU0wQSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.TZcTU-LWCYGN2LlsqD7E32BbD2DqB5AeOflgFrXwUGstO6y_qoDo9a67PTbeo2IYEqXDfezXlVppJEFZiMorR0pALHE55M-HP7tg92kaLr6fm3uqHaJbiE8Gr5jEhSkghsJbWl7EHEjoJub1lfCZvpXgXUZbr7R5khrp12MLwHt54h9n9wjGfXU7-eXIWHmd6z2_k1qTbQ_kJQ4xIuwv8MfrKN73i29R6_ApUcb0HFWR8eYFHrJkG6BW2mY9IDgXx5-Q4PrUANnvqe3GRCTlSkcl3_M4RQnypXxyNFMXqly7dlwecwy-OLzOtj0kdshbH45TMiZv2DKeFkO0L9BGMg';

  beforeAll(async () => { 
    const url = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(url, { useNewUrlParser: true })
    await model.remove()
  })

  afterEach(async () => { 
    await model.remove()
  })

  const headers = {'Authorization': `Bearer ${token}`}
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