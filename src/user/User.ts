import { AxiosInstance } from "axios";
import { UserResponse } from "..";

export class User {
  private static readonly path = "/v2/user";

  constructor(private readonly httpClient: AxiosInstance) {}

  async getUser(accessToken: string): Promise<UserResponse> {
    const response = await this.httpClient.get(User.path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  }
}
