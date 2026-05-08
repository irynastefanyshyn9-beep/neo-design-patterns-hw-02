Homework 2 SOLID Design Principles.

This project demonstrates an architectural refactoring of a notification system. The original code violated all five SOLID principles, making it rigid and difficult to maintain. By applying clean architecture patterns, the system is now modular, testable, and scalable.

Breakdown of SOLID:
1. Single Responsibility Principle (SRP): Each class now has one job. User manages data, Logger handles logs, and specific classes handle message delivery.
2. Open/Closed Principle (OCP): New notification channels can be added without modifying existing code by simply creating a new class.
3. Liskov Substitution Principle (LSP): All notification services implement the INotificationChannel interface, making them interchangeable.
4. Interface Segregation Principle (ISP): Specific interfaces (ILogger, INotificationChannel) ensure classes only depend on methods they actually use.
5. Dependency Inversion Principle (DIP): High-level modules no longer depend on low-level modules; both depend on abstractions. Dependencies are injected in constructors.

Project Structure:
/src
  /core
    interfaces.ts
  /models
    User.ts
  /services
    NotificationService.ts
    EmailNotification.ts
    SMSNotification.ts
    PushNotification.ts
    Logger.ts
  main.ts

How to Run:
1. Install dependencies: npm install.
2. Execute: npx ts-node src/main.ts

Expected Output:
[LOG] Sending EMAIL to user@example.com
Email sent to user@example.com: Ваш платіж оброблено успішно!
[LOG] Sending SMS to +1234567890
SMS sent to +1234567890: Ваш платіж оброблено успішно!
[LOG] Sending PUSH to device-token-123
Push sent to device-token-123: Ваш платіж оброблено успішно!
