import { AxiosInstance } from "axios";
import { CoinbaseCurrency, WithdrawToCoinbaseAccountResponse } from "../types";

export class Withdrawal {
  static readonly path = "/withdrawals";
  constructor(private readonly httpClient: AxiosInstance) {}

  async withdrawToCoinbaseAccount(
    coinbaseAccountId: string,
    currency: CoinbaseCurrency,
    amount: string
  ): Promise<WithdrawToCoinbaseAccountResponse> {
    const response = await this.httpClient.post(Withdrawal.path, {
      coinbase_account_id: coinbaseAccountId,
      amount,
      currency,
    });

    return response.data;
  }
}
