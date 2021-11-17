export enum CoinbaseCurrency {
  BTC = "BTC",
  SOL = "SOL",
  ETH = "ETH",
  USD = "USD",
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

export type OrderResponse = {
  id: string;
  price: string;
  size: string;
  product_id: string;
  profile_id: string;
  side: string;
  funds: string;
  specified_funds: string;
  type: string;
  settled: boolean;
  status: string;
};

export type CoinbaseClientConfiguration = {
  apiKey: string;
  apiSecret: string;
  passphrase: string;
  environment: "SANDBOX" | "PRODUCTION";
  outhClientId: string;
  oauthClientSecret: string;
  oauthRedirectUrl: string;
};

export type CoinbaseError = {
  message: string;
};
