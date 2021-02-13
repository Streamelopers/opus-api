// Token types
type TokenPayload = {
  id: number;
  exp: number;
  iat: number;
}

// Entities
type CompanyPayload = {
  name: string;
  website: string;
  description: string;
  userId: number;
}