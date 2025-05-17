
// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const users: {
  id: string;
  name: string;
  email: string;
  password: string; // hashed
}[] = [
  {
    id: "1",
    name: "Jane Doe",
    email: "asfaa@gmail.com",
    // hash of "password123"
    password: "$2b$10$V7P7Mf/6g5/NB9YdqBqO0OBZf5eWZoG6wupnvDdOaGPpUojUQgZeK"
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = users.find((u) => u.email === credentials.email);
        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        return isValid ? user : null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};
