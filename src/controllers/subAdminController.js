exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"SubAdmin Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"SubAdmin Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"SubAdmin Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"SubAdmin Updated!"});
};