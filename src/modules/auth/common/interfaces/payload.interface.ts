import { Identities } from "../enums";

export interface JwtPayload {
  id: number;
  name: string;
  email: string;
  iat?: Date;
  identity: Identities;
}
