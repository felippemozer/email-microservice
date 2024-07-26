import { NextFunction, Request, Response } from "express";
import { EmailService, IEmailService } from "../services";

interface RequestBody {
    to: string,
    subject: string
    body: string
}

export class SendEmailController {
    private emailService: IEmailService;

    constructor() {
        this.emailService = new EmailService("smtp.example.com");
    }
    async handle(
        req: Request<unknown, unknown, RequestBody>,
        res: Response<void>,
        next: NextFunction
    ) {
        const {
            body,
            subject,
            to
        } = req.body;
        try {
            await this.emailService.send({
                body,
                subject,
                to
            });
            console.info("Rota executou com sucesso");
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}