import { ILogger, INotificationService } from "./core/interfaces";
import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { NotificationService } from "./services/NotificationService";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";

// Залежності створюються один раз і передаються через інтерфейси (DIP)
const logger: ILogger = new Logger();
const notificationService: INotificationService = new NotificationService();

// Реєстрація каналів — розширення без зміни NotificationService (OCP)
notificationService.addChannel(new EmailNotification(logger));
notificationService.addChannel(new SMSNotification(logger));
notificationService.addChannel(new PushNotification(logger));

// User — лише дані, жодної логіки повідомлень (SRP)
const user = new User(
  "user@example.com",
  "+1234567890",
  "device-token-123"
);

// Розсилка через абстракцію — NotificationService не знає про конкретні канали
notificationService.notifyAll(user, "Ваш платіж оброблено успішно!");