export interface User {
  createdAt: string;
  email: string;
  isVerified: boolean;
  lastLogin: string;
  name: string;
  updatedAt: string;
  verificationToken: string;
  verificationTkoenExpiresAt: string;
  __v: number;
  _id: string;
}

export interface UserData {
  message: string;
  success: true;
  user: User;
}
