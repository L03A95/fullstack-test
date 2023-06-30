const { Router } = require('express')
const {postUser} = require('../controllers/userController')

userRouter = Router()

userRouter.post('/user', async (req,res) => {
    try {
        user = await postUser(req.body);
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json(err.message)
    }
})

userRouter.get('/', (req,res) => {
    res.status(200).json({message: "Bien boludito te acordaste como se hace"})
})



module.exports = {userRouter};