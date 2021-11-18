import { AxiosInstance } from "axios";
import { AuthenticationResponse } from "../types";

export class Authentication {
  private static readonly path = "/oauth/token";
  constructor(
    private readonly httpClient: AxiosInstance,
    private readonly oauthClientId: string,
    private readonly oauthClientSecret: string,
    private readonly oauthRedirectUrl: string
  ) {}

  async getAccessToken(code: string): Promise<AuthenticationResponse> {
    const response = await this.httpClient.post(Authentication.path, {
      grant_type: "authorization_code",
      code,
      client_id: this.oauthClientId,
      client_secret: this.oauthClientSecret,
      redirect_url: this.oauthRedirectUrl,
    });

    return response.data;
  }
}
