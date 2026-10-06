import { Order } from "../domain/Order";

export interface Logger {
  log(message: string): void;
}

export interface NotificationService {
  sendConfirmation(order: Order): void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

export class EmailNotificationService implements NotificationService {
  sendConfirmation(_order: Order): void {
    console.log("Подтверждение отправлено");
  }
}
