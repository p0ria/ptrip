import {RoleType} from "../enums/role.enum";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  role: RoleType;
}
