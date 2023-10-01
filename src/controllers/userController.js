exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"User Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"User Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"User Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"User Updated!"});
};