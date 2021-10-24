import { PhoneNumber } from "./PhoneNumber";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  userName: string;
}

export interface CreateUserModel extends User {
  sexID: string;
  phoneNumber: PhoneNumber;
}

export interface GetUserModel extends User {
  sex: string;
}
