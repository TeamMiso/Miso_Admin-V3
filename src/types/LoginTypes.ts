export interface LoginReqTypes {
  email: string;
  password: string;
}

export interface LoginResTypes {
  success: boolean;
  token: string;
}
