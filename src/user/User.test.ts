import { CoinbaseClient } from "../";
import * as dotenv from "dotenv";

let client: CoinbaseClient;

beforeAll(() => {
  dotenv.config();
});

beforeEach(() => {
  client = new CoinbaseClient({
    apiKey: process.env.COINBASE_PRO_API_KEY as string,
    apiSecret: process.env.COINBASE_PRO_API_SECRET as string,
    oauthClientSecret: process.env.COINBASE_CLIENT_SECRET as string,
    oauthRedirectUrl: process.env.COINBASE_REDIRECT_URI as string,
    outhClientId: process.env.COINBASE_CLIENT_ID as string,
    passphrase: process.env.COINBASE_PRO_PASSPHRASE as string,
    environment: "SANDBOX",
  });
});

describe("Coinbase user", () => {
  test.skip("Returns user information", () => {});
});
