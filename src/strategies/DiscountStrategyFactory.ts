import { OrderType } from "../domain/Order";
import { DiscountStrategy } from "./DiscountStrategy";
import { RegularDiscount, VipDiscount, WholesaleDiscount, SeasonalDiscount } from "./ConcreteDiscounts";

export class DiscountStrategyFactory {
  private static readonly strategies: Record<OrderType, DiscountStrategy> = {
    regular: new RegularDiscount(),
    vip: new VipDiscount(),
    wholesale: new WholesaleDiscount(),
    seasonal: new SeasonalDiscount(),
  };

  static get(type: OrderType): DiscountStrategy {
    return this.strategies[type];
  }
}
