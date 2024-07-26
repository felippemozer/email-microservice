import Joi from "joi";

export const send = Joi.object({
    body: Joi.object({
        to: Joi.string().email({ allowUnicode: false }).required(),
        subject: Joi.string().required(),
        body: Joi.string().required()
    })
}).unknown(true);