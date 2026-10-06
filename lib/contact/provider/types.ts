export type EmailAttachment = {
  filename: string;
  /** Raw file contents; encoded to base64 by the Resend provider. */
  content: string | Buffer;
};

export type SendEmailParams = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  attachments?: EmailAttachment[];
};

export type SendEmailResult =
  | { ok: true; id?: string }
  | { ok: false; message: string };

export interface EmailProvider {
  send(params: SendEmailParams): Promise<SendEmailResult>;
}
