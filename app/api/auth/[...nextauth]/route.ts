/* eslint-disable @typescript-eslint/no-explicit-any */

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const users = [
  {
    id: "1",
    name: "Jane Doe",
    email: "asfaa@gmail.com",
    password: "password123"
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = users.find(u => u.email === credentials?.email);
        if (user && await compare(credentials.password, user.password)) {
          return user;
        }
        return null;
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, users };

