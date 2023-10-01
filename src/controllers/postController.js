exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"post Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Post Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Post Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Post Updated!"});
};