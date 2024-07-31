import { EmailService } from "./email.service";

describe("send email", () => {
    const emailService = new EmailService();

    it("should send email to account owner", () => {
        expect(emailService.send({
            to: "felippemozer22@gmail.com",
            subject: "Teste de envio para dono da conta",
            body: "Enviando um email para o dono da conta do serviço"
        })).resolves.toBeUndefined()
    });

    it("should return error on send to another account other than account owner", () => {
        expect(emailService.send({
            to: "anothermail@mail.com",
            subject: "Teste de erro para envio para outro usuário",
            body: `Apenas o usuário da conta do serviço pode receber emails,
                pois está sendo utilizado um domínio de testes para tal`
        })).rejects.toThrow()
    });
})