const { Router } = require("express");
const {userRouter} = require('./userRoutes')

const router = Router()

router.use("/api", userRouter)


module.exports = router;