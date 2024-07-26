import { Router } from "express";
import { SendEmailController } from "../controllers";
import { validateSchema } from "../middleware";
import { EmailSchema } from "../schemas";

const router = Router();

const sendEmailController = new SendEmailController();
router.post(
    "/send-email",
    validateSchema(EmailSchema.send),
    sendEmailController.handle
);

export default router;