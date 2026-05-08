import { INotificationChannel, ILogger, IRecipientData } from "../core/interfaces";

export class SMSNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(recipient: IRecipientData, message: string): void {
    this.logger.log(`Sending SMS to ${recipient.phone}`);
    console.log(`SMS sent to ${recipient.phone}: ${message}`);
  }
}
