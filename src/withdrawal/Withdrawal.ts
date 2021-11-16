import { AxiosInstance, AxiosResponse } from "axios";
import {
  CoinbaseCurrencies,
  WithdrawToCoinbaseAccountResponse,
} from "../types";

export class Withdrawal {
  static readonly path = "/withdrawals";
  constructor(private readonly httpClient: AxiosInstance) {}

  async withdrawToCoinbaseAccount(
    coinbaseAccountId: string,
    currency: CoinbaseCurrencies,
    amount: number
  ): Promise<WithdrawToCoinbaseAccountResponse> {
    const response = await this.httpClient.post(Withdrawal.path, {
      coinbase_account_id: coinbaseAccountId,
      amount,
      currency,
    });

    return response.data;
  }
}
