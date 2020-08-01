const mongoose = require('mongoose')

//27017是mongodb的默认端口
mongoose
  .connect('mongodb://localhost/account', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('连接数据库成功'))
  .catch((err) => console.log(err, '连接数据库失败'))
//创建用户集合规则
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 15,
  },
})
//创建集合/*  */
const User = mongoose.model('User', UserSchema)
/* 注册用的创建文档 */
const signIn = function (name, word, fun) {
  const user = new User({
    username: name,
    password: word,
  })
  fun()
  user.save()
}

module.exports = {
  signIn,
  User,
}
