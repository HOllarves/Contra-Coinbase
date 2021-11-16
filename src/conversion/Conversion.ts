import { AxiosInstance } from "axios";
import { CoinbaseCurrencies } from "../types";

export class Conversion {
  constructor(private readonly httpClient: AxiosInstance) {}
  private static path = "/conversions";

  async convertCurrency(
    from: CoinbaseCurrencies,
    to: CoinbaseCurrencies,
    amount: string
  ) {
    const response = await this.httpClient.post(Conversion.path, {
      from,
      to,
      amount,
    });

    return response.data;
  }
}
