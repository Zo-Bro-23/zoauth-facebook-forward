const queryString = require('query-string')
function forwardto(req, resp){
    const params = {}
    for(key in req.query){
        params[key] = req.query[key]
    }
    resp.redirect(`http://localhost:5210/callback/facebook?${queryString.stringify(params)}`)
}

module.exports = forwardto