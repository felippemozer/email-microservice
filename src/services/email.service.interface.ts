export interface ISendEmailInputDTO {
    to: string;
    subject: string;
    body: string;
}

export interface IEmailService {
    send(dto: ISendEmailInputDTO): Promise<void>
}