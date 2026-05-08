import { INotificationChannel, ILogger, IRecipientData } from "../core/interfaces";

export class EmailNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(recipient: IRecipientData, message: string): void {
    this.logger.log(`Sending EMAIL to ${recipient.email}`);
    console.log(`Email sent to ${recipient.email}: ${message}`);
  }
}
