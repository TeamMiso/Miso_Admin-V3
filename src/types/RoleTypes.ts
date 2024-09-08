export interface RoleTypes {
  id: number;
  email: string;
  password: string;
  point: number;
  role: "ROLE_ADMIN" | "ROLE_USER";
}
