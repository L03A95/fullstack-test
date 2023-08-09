const { Router } = require("express");
const {userRouter} = require('./userRoutes')
const {videoRouter} = require('./videoGamesRoutes')

const router = Router()

router.use("/api", userRouter)
router.use("/videogames", videoRouter)


module.exports = router;