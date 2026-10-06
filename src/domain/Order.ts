export type OrderType = "regular" | "vip" | "wholesale" | "seasonal";

export interface OrderItem {
  name: string;
  price: number;
  qty: number;
}

export interface Order {
  items: OrderItem[];
  type: OrderType;
}
