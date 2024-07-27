import { Address, MailtrapClient } from "mailtrap";
import { IEmailService, ISendEmailInputDTO } from "./email.service.interface";

export class EmailService implements IEmailService {
    private client;

    constructor() {
        this.client = new MailtrapClient({
            token: process.env.MAILTRAP_API_TOKEN ?? "",
            testInboxId: Number(process.env.MAILTRAP_TESTING_INBOX_ID),
            accountId: Number(process.env.MAILTRAP_ACCOUNT_ID)
        });
    }

    async send(dto: ISendEmailInputDTO): Promise<void> {
        const subject = dto.subject;
        const text = dto.body;
        const from: Address = {
            name: "Teste",
            email: "teste@teste.com"
        };
        const to: Array<Address> = [{
            email: dto.to
        }];

        const response = await this.client.send({
            from,
            to,
            subject,
            text
        });
        console.info(response);
    }
}