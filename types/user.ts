export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUsers {
  users: IUser[];
}
