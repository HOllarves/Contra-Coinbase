import { CoinbaseClient } from "..";
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

describe("Coinbase orders", () => {
  test("Trigger buy order from USD to BTC", async () => {
    const orderId = Math.floor(Math.random() * 90000) + 10000;
    const amount = "10";
    const order = await client.Order.createOrder(
      "BTC-USD",
      amount,
      "buy",
      orderId.toString()
    );
    expect(order.id).toBeDefined();
  });
  test("Trigger buy order from USD to BTC and then fetches the order", async () => {
    const amount = "10";
    const order = await client.Order.createOrder(
      "BTC-USD",
      amount,
      "buy",
      null
    );

    const response = await client.Order.getOrder(order.id);
    expect(response.id).toBeDefined();
    expect(response.settled).toBeTruthy();
    expect(response.status).toBe("done");
  });
});
