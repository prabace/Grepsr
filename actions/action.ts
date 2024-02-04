"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";


export async function create(token: string) {
  cookies().set({ name: "userToken", value: token, httpOnly: true });
}

export async function obtain() {
  if (cookies().has("userToken")) {
    return cookies().get("userToken");
  }
}

export async function remove(tokenName: string) {
  cookies().delete(tokenName);
  redirect("/");
}


export async function isExpired(token: string) {
  if (!token) {
    return true;
  }
  const decodedToken = jwtDecode(token);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  if (decodedToken.exp) {
    return decodedToken.exp < currentTimestamp;
  }
}
