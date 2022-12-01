const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const model = require('../schemas/user')
const mongoose = require('mongoose');
const databaseName = 'test';

describe('server intergration tests', () => { 
  const app = express();
  app.use(express.json())
  app.use(router)
  const request = supertest(app)

  beforeAll(async () => { 
    const url = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(url, { useNewUrlParser: true })
    await model.remove()
  })

  afterEach(async () => { 
    await model.remove()
  })


  it('should be able to create a user', async () => {
    const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InlHR2c5bmFFWkpISlBaaVFDZ21UNyJ9.eyJpc3MiOiJodHRwczovL2Rldi1vbmJkdDhjM3ozam5tN3JrLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzg3NDMwMzY3YWQzZTA5MDMwY2UyYzQiLCJhdWQiOlsiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImh0dHBzOi8vZGV2LW9uYmR0OGMzejNqbm03cmsudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY2OTkwODA4OCwiZXhwIjoxNjY5OTk0NDg4LCJhenAiOiJyUWtBWW9QSkt3cnZZUkpJVGxVb09jemxnRUFxTU0wQSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.TxPAwk-cgkwq67NhYvJ6g0Gr2OPBLSV61gCLhMUOfVsPaKYzm5jDBY5cadhOc4WOt9i7MxSEUnyOH2f-tryzIYNuZhNkLLze8UvosdbXLqmQ9nLL8Cqlx_oZJGSKeKiDhgfK-9dqpf6u-jHt5NTabYf55jp3G1peqq3F4fNjAzk1kM7bVJXsfn4QpLhzmg0aSmP5nFKIRjflSfTa-fzHPoDeX71mRhpZIuHWsJcK4jWonS0CqL1-A2poKIcAPkRzxeURlTANGVaCq_cUEiBn5qTxvWws0PXzv_2mRAdgGGNWvmOSH-6nCU-39kTvus-SafQ_2mClQxSQqWuaQw-6VQ'
    const user = {
    userId: "123",
    slug_url: "1234",
    name: "bob",
    }
    await request.post('/user').send(user, accessToken)
    const found = await model.findOne({ name: "bob" })
    expect(found.slug_url).toBe('1234')
   })

  it('shouldnt be able to create a user twice', async () => {

    const user = {
    userId: "123",
    slug_url: "1234",
    name: "bob",
    }
    await request.post('/user').send(user)
    const res = await request.post('/user').send(user)
    expect(res.body.message).toEqual('User already exists')
   })
  

  it('should return user if user exists', async () => {
    const user = {
    userId: "123",
    slug_url: "1234",
    name: "bob",
    }
    await request.post('/user').send(user)
    const res = await request.get('/user/123')
    expect(res.body.data.name).toEqual('bob')
   })
  
  it('should return error if user doesnt exist', async () => {
    const res = await request.get('/user/123')
    expect(res.body.message).toEqual("User Not found")
   })
  
  it('should update user', async () => {
    const user = {
    userId: "123",
    slug_url: "1234",
    name: "bob",
    }
    const res = {
      "userId": "123",
      "slug_url": "12",
      "name": "bob"
    }
    await request.post('/user').send(user)
    const data = await request.put('/user/123').send(res)
    expect(data.body.data.slug_url).toEqual('12')
  })

  it('shouldnt be able to update user that doesnt exist', async () => {
    const res = {
      "userId": "123",
      "slug_url": "12",
      "name": "bob",
        "portfolio": {
            "layout": [],
            "projects": [],
            "work_history": [],
            "social_media": []
        },
        "_id": "63822e370eeee5251e2b1af5",
        "__v": 0
    }
  const data = await request.put('/user/123').send()
    expect(data.body.message).toEqual("User doesn't exist")
  })
  
})