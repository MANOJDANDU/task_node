const Boom = require('@hapi/boom');
const rule = require('../helpers/rules/userRule');
const userBA = require('../layers/businessLayer/userBA');
const { ERRORS, MESSAGES } = require('../helpers/constants');

class UserController {

    async getTaskList(req, res, next) {
        try {
            const params = req.query;
            const options = {};

            const { error } = rule.getTaskRule.validate(params);
            if (error) {
                return next(Boom.badRequest(error.details[0].message));
            }

            if (Object.keys(params).length > 0) {
                options.params = params;
            }

            let task = await userBA.getTaskList(options);

            if (!task) {
                return next(Boom.notFound(ERRORS.NO_TASKS));
            }

            res.status(200).send({
                status: true,
                message: MESSAGES.TASKS_FETCHED,
                data: task
            });
        } catch (error) {
            next(Boom.internal(ERRORS.FAILED_TO_FETCH, error));
        }
    
    };
}

module.exports = new UserController();