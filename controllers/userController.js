const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res, next) {

    }


    async login(req, res, next) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
          return   next(ApiError.badRequest('nit id.'))
        }

        res.json(id)
    }
}
module.exports = new UserController()
