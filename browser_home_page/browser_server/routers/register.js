const express = require('express')
const register = express.Router()
const database = require('../public/database')
register.post('/register', (req, res) => {
  database.User.find(
    { username: req.body.userName },
    (resolve, reject) => {}
  ).then((data) => {
    if (data[0] != null || data[0] != undefined) {
      res.status(202).send('用户已存在请')
    } else {
      database.signIn(req.body.userName, req.body.passWord, () => {
        res.send('恭喜！注册成功')
      })
    }
  }).catch(()=>{
    res.send(404);
    return
  })
})
module.exports = register
