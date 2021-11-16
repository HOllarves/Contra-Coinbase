export enum CoinbaseCurrencies {
  BTC = "BTC",
  SOL = "SOL",
  ETH = "ETH",
  USDC = "USDC",
}

export type WithdrawToCoinbaseAccountResponse = {
  id: string;
  amount: string;
  currency: string;
  payout_at: string;
  fee: string;
  subtotal: string;
};

export type ConvertCurrencyResponse = {
  id: string;
  amount: string;
  from_account_id: string;
  to_account_id: string;
  from: string;
  to: string;
};

export type AuthenticationResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};
