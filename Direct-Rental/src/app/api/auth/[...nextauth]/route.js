import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        if (user?.success) {
          return user.data; // must return an object
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin", // your custom login page
  },
  session: {
    strategy: "jwt",
  },
});
export { handler as GET, handler as POST };