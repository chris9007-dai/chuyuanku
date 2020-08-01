const express = require('express')
const login = express.Router()
const database = require('../public/database')
const bodyparser = require('body-parser')
login.post('/login', (req, res) => {
  database.User.find({ username: req.body.userName }, (resolve, reject) => {})
    .then((result) => {
      if (result[0] != null || result[0] != undefined) {
        if (result[0].password == req.body.passWord) {
          res.send('登录成功')
        } else {
          res.status(202).send({"flag":"1"})
        }
      } else {
        res.status(202).send({"flag":"2"})
      }
    })
    .catch(()=>{
      res.send(404);
      return;
    })
      
})
module.exports = login
