import { INotificationChannel, ILogger, IRecipientData } from "../core/interfaces";

export class PushNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(recipient: IRecipientData, message: string): void {
    this.logger.log(`Sending PUSH to ${recipient.deviceToken}`);
    console.log(`Push sent to ${recipient.deviceToken}: ${message}`);
  }
}
