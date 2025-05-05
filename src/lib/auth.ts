import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Naver from "next-auth/providers/naver";
import Kakao from "next-auth/providers/kakao";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google, Naver, Kakao],
});
