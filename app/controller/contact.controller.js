const create = (req, res) => {
    res.send({message: "create handler"});
}

const findAll = (req, res) => {
    res.send({message: "findAll handler"});
}

const findOne = (req, res) => {
    res.send({message: "findOne handler"});
}

const update = (req, res) => {
    res.send({message: "update handler"});
}

const deletee = (req, res) => {
    res.send({message: "delete handler"});
}

const deleteAll = (req, res) => {
    res.send({message: "deleteAll handler"});
}

const findALLFavorite = (req, res) => {
    res.send({message: "findALLFavorite handler"});
}

export {
    deleteAll,deletee,findALLFavorite,findAll,findOne,update,create
}