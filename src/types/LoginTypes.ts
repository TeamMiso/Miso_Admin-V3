export interface LoginReqTypes {
  email: string;
  password: string;
}

export interface LoginResTypes {
  accessToken: string;
  refreshToken: string;
  accessExp: string;
  refreshExp: string;
}
