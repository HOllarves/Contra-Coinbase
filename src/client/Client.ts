import axios from "axios";
import { Buffer } from "buffer";
import crypto from "crypto";
import { Authentication } from "../authentication";
import { Conversion } from "../conversion";
import { Withdrawal } from "../withdrawal";

export class CoinbaseClient {
  readonly Withdrawals: Withdrawal;
  readonly Authentication: Authentication;
  readonly Conversion: Conversion;

  constructor(
    apiKey: string,
    apiSecret: string,
    passphrase: string,
    environment: "SANDBOX" | "PRODUCTION",
    outhClientId: string,
    oauthClientSecret: string,
    oauthRedirectUrl: string
  ) {
    const coinbaseProHttpClient =
      environment === "PRODUCTION"
        ? axios.create({
            baseURL: "https://api.pro.coinbase.com",
            timeout: 30_000,
          })
        : axios.create({
            baseURL: "https://api-public.sandbox.pro.coinbase.com",
            timeout: 30_000,
          });
    const coinbaseHttpClient =
      environment === "PRODUCTION"
        ? axios.create({
            baseURL: "https://api.coinbase.com/oauth",
            timeout: 30_000,
          })
        : axios.create({
            baseURL: "",
            timeout: 30_000,
          });

    coinbaseProHttpClient.interceptors.request.use(async (config) => {
      const timestamp = Date.now() / 1000;
      const baseUrl = config.baseURL;
      const path = baseUrl?.replace(baseUrl, "");
      const payload = `${timestamp}${config.method?.toUpperCase()}${path}${
        config.data
          ? JSON.stringify(config.data)
          : new URLSearchParams(config.params).toString()
      }`;
      const key = Buffer.from(apiSecret, "base64");
      const hmac = crypto.createHmac("sha256", key);
      const signature = hmac.update(payload).digest("base64");
      config.headers = {
        ...config.headers,
        "CB-ACCESS-KEY": apiKey,
        "CB-ACCESS-PASSPHRASE": passphrase,
        "CB-ACCESS-SIGN": signature,
        "CB-ACCESS-TIMESTAMP": `${timestamp}`,
      };

      return config;
    });

    this.Withdrawals = new Withdrawal(coinbaseProHttpClient);
    this.Authentication = new Authentication(
      coinbaseHttpClient,
      outhClientId,
      oauthClientSecret,
      oauthRedirectUrl
    );
    this.Conversion = new Conversion(coinbaseProHttpClient);
  }
}
