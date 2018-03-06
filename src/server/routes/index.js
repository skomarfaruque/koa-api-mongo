const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose')
const queries = require('../db/queries/movies');
const db = mongoose.connect('mongodb://localhost:27017/DB');

const User = mongoose.model("User", {
  firstName: String,
  lastName: String
})

router.get('/', async (ctx) => {
  let obj = {firstName: 'sohag', lastName: 'faruque'}
  await User.create(obj)
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})
router.get('/movies', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})

module.exports = router;
