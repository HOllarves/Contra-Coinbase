import { CoinbaseClient } from "./Client";
import * as dotenv from "dotenv";

beforeAll(() => {
  dotenv.config();
});

describe("Coinbase Client", () => {
  test("Client is initalized", () => {
    const client = new CoinbaseClient({
      apiKey: process.env.COINBASE_PRO_API_KEY as string,
      apiSecret: process.env.COINBASE_PRO_API_SECRET as string,
      environment: "SANDBOX",
      oauthClientSecret: process.env.COINBASE_CLIENT_SECRET as string,
      oauthRedirectUrl: process.env.COINBASE_REDIRECT_URI as string,
      outhClientId: process.env.COINBASE_CLIENT_ID as string,
      passphrase: process.env.COINBASE_PRO_PASSPHRASE as string,
    });
    expect(client).toBeDefined();
  });
});
