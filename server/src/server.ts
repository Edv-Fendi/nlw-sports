import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1,
      name: 'John 1'
    },

    {
      id: 2,
      name: 'Edvaldo 2'
    },
    {
      id: 3,
      name: 'John 3'
    }
  ])
})

app.listen(3333)
