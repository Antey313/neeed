import { OrderProcessor } from "./OrderProcessor";
import { ConsoleLogger, EmailNotificationService } from "./services/Services";
import { Order } from "./domain/Order";

const processor = new OrderProcessor(
  new ConsoleLogger(),
  new EmailNotificationService(),
);

const orders: Order[] = [
  { items: [{ name: "Книга", price: 1000, qty: 2 }], type: "regular" },
  { items: [{ name: "Книга", price: 1000, qty: 2 }], type: "vip" },
  { items: [{ name: "Книга", price: 1000, qty: 2 }], type: "wholesale" },
  { items: [{ name: "Книга", price: 1000, qty: 2 }], type: "seasonal" },
];

for (const order of orders) {
  const total = processor.process(order);
  console.log(`--- Итог: ${total} ---`);
}
