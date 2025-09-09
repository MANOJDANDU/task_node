const Joi = require('joi');

exports.getTaskRule = Joi.object({
    Task_ID: Joi.string().allow(null).empty(""),
    Task_Name: Joi.string().allow(null).empty(""),
    Project_ID: Joi.string().allow(null).empty(""),
    Task_Owned_EmployeeId: Joi.string().allow(null).empty("")
});