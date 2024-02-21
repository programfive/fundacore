export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  password: string;
  role: string;
  isTwoFactorEnabled: boolean;
}
