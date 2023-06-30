const {User} = require('../db')


const postUser = async (user) => {
    try {
        const {username, password} = user
        newUser = User.create({username, password})
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = {
    postUser
}