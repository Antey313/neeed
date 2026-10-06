import { Order } from "./domain/Order";
import { Logger, NotificationService } from "./services/Services";
import { DiscountStrategyFactory } from "./strategies/DiscountStrategyFactory";

export class OrderProcessor {
  constructor(
    private readonly logger: Logger,
    private readonly notifier: NotificationService,
  ) {}

  process(order: Order): number {
    const subtotal = this.calculateSubtotal(order);
    const strategy = DiscountStrategyFactory.get(order.type);
    const total = strategy.apply(subtotal);

    this.logger.log(`Заказ обработан, сумма: ${total}`);
    this.notifier.sendConfirmation(order);

    return total;
  }

  private calculateSubtotal(order: Order): number {
    return order.items.reduce((s, i) => s + i.price * i.qty, 0);
  }
}
