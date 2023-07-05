const {User} = require('../db')


const postUser = async (user) => {
    try {
        const {username, password} = user
        newUser = User.create({username, password})
        return newUser
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = {
    postUser
}