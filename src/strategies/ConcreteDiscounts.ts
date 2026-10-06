import { DiscountStrategy } from "./DiscountStrategy";

export class RegularDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total;
  }
}

export class VipDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total * 0.9;
  }
}

export class WholesaleDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total * 0.8;
  }
}

export class SeasonalDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total * 0.85;
  }
}
