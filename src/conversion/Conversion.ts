import { AxiosInstance } from "axios";
import { CoinbaseCurrency, ConvertCurrencyResponse } from "../types";

export class Conversion {
  constructor(private readonly httpClient: AxiosInstance) {}
  private static path = "/conversions";

  async convertCurrency(
    from: CoinbaseCurrency,
    to: CoinbaseCurrency,
    amount: string
  ): Promise<ConvertCurrencyResponse> {
    const response = await this.httpClient.post(Conversion.path, {
      from,
      to,
      amount,
    });

    return response.data;
  }
}
