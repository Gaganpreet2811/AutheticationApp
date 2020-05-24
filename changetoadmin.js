require('./helpers/database').connection()
const User=require('./models/User')
User.findOne({username:'admin'})
.then(user=>{
  user.role='admin'
  user.save().then(()=>console.log('user saved'))
})
