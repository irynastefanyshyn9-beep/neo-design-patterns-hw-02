export interface ILogger {
  log(message: string): void;
}

export interface IRecipientData {
  email: string;
  phone: string;
  deviceToken: string;
}

export interface INotificationChannel {
  send(recipient: IRecipientData, message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notifyAll(recipient: IRecipientData, message: string): void;
}