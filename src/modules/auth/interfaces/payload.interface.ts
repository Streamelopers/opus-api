export interface JwtPayload {
  id: number;
  username: string;
  name: string;
  email: string;
  iat?: Date;
}
