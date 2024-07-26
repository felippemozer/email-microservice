import { createTransport, Transporter } from "nodemailer";
import { IEmailService, ISendEmailInputDTO } from "./email.service.interface";

export class EmailService implements IEmailService {
    private client: Transporter;

    constructor(host: string) {
        this.client = createTransport({
            host,
            auth: {
                user: "username",
                pass: "password"
            }
        });
    }

    async send(dto: ISendEmailInputDTO): Promise<void> {
        console.info("Funcao de envio chamada com sucesso");
        const {
            body,
            subject,
            to
        } = dto;
        console.info(`to: ${to}`);
        console.info(`subject: ${subject}`);
        console.info(`body: ${body}`);
        const response = await this.client.sendMail({
            from: "email@email.com",
            to,
            subject,
            text: body
        });
        console.log(response)
    }
}