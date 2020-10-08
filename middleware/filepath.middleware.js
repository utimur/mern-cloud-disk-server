function filePath(path) {
    return function(req, res, next) {
        req.filePath = path
        next();
    }
}



module.exports = filePath
