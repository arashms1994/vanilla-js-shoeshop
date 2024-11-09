import { BaseUrl } from "./confug";

export async function GetUsers() {
  const response = await fetch(`${BaseUrl}/users`);
  const users = await response.json();
  return users;
}

export async function GetUsersId(id) {
  const response = await fetch(`${BaseUrl}/users/${id}`);
  const user = await response.json();
  return user;
}
