import express from 'express'
import cors from 'cors'

app.use(cors()  )

// const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)