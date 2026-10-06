export interface DiscountStrategy {
  apply(total: number): number;
}
