exports.create = (req, res) => {
    res.send({message: "Create handler"});
};

exports.findAll = (req, res) => {
    res.send({message: "FindAll handler"});
};

exports.findOne = (req, res) => {
    res.send({message: `FindOne handler`});
};

exports.update = (req, res) => {
    res.send({message: `Update handler`});
};

exports.delete = (req, res) => {
    res.send({message: `Delete handler`});
};

exports.deleteAll = (req, res) => {
    res.send({message: `DeleteAll handler`});
};

exports.findAllFavorite = (req, res) => {
    res.send({message: `FindAllFavorite handler`});
};
