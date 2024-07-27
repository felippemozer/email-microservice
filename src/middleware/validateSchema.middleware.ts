import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validateSchema = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const validateResponse = schema.validate(req, {
            abortEarly: false,
            convert: true,
            dateFormat: "iso"
        });

        if (!validateResponse.error && !validateResponse.warning) {
            const values = validateResponse.value;
            req.query = values.query;
            req.body = values.body;
            req.params = values.params;
            next();
            return;
        }

        if (validateResponse.warning) {
            console.error(validateResponse.warning.message);
        }

        if (validateResponse.error) {
            next(validateResponse.error.message);
        }
    };
}

export default validateSchema;