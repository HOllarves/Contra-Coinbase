import { AxiosInstance } from "axios";
import { CoinbaseError, OrderResponse } from "../types";

export class Order {
  private static path = "/orders";
  constructor(private readonly httpClient: AxiosInstance) {}

  async createOrder(
    pair: string,
    funds: string,
    side: "buy" | "sell",
    orderId: string | null
  ): Promise<OrderResponse> {
    const response = await this.httpClient.post(Order.path, {
      time_in_force: "IOC",
      type: "market",
      side,
      funds,
      product_id: pair,
      client_oid: orderId,
    });

    return response.data;
  }

  async getOrder(orderId: string): Promise<OrderResponse> {
    const response = await this.httpClient.get(`${Order.path}/${orderId}`);

    return response.data;
  }
}
