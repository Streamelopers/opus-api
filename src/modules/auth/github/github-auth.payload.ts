import { Identities } from "../common/enums";

export interface GitHubAuthPayload {
  name: string;
  email: string;
  avatarUrl: string;
  identity: Identities;
  accessToken: string;
  refreshToken: string;
}
