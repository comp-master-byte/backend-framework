const users = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Artyom'}
]

const getUser = (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users)
}

const createUser = (req, res) => {
    const user = req.body;
    users.push(user)
    res.send(JSON.stringify(users))
}

module.exports = {
    getUser,
    createUser
}