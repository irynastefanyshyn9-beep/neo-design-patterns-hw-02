import { INotificationChannel, INotificationService, IRecipientData } from "../core/interfaces";

export class NotificationService implements INotificationService {
  private channels: INotificationChannel[] = [];

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notifyAll(recipient: IRecipientData, message: string): void {
    this.channels.forEach(channel => channel.send(recipient, message));
  }
}
