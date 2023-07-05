const { Router } = require('express')
const {postUser} = require('../controllers/userController')

userRouter = Router()

userRouter.post('/user', async (req,res) => {
    try {
        user = await postUser(req.body);
        res.status(200).json({"Created user" : user})
    } catch (err) {
        res.status(400).json(err.message)
    }
})



module.exports = {userRouter};