import { Resend } from "resend";
import type { EmailProvider, SendEmailParams, SendEmailResult } from "./types";

export function createResendProvider(apiKey: string): EmailProvider {
  const resend = new Resend(apiKey);

  return {
    async send(params: SendEmailParams): Promise<SendEmailResult> {
      const { data, error } = await resend.emails.send({
        from: params.from,
        to: params.to,
        replyTo: params.replyTo,
        subject: params.subject,
        text: params.text,
        html: params.html,
        attachments: params.attachments?.map((attachment) => ({
          filename: attachment.filename,
          content:
            typeof attachment.content === "string"
              ? Buffer.from(attachment.content, "utf8")
              : attachment.content,
        })),
      });

      if (error) {
        console.error("[contact] Resend error:", error.message);
        return { ok: false, message: "Unable to send message right now." };
      }

      return { ok: true, id: data?.id };
    },
  };
}
