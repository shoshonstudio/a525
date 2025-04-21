import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    GitHub,Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {

        console.log('=====',credentials)

        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "pass",
            email: "test1@gmail.com",
          },
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "pass",
            email: "test2@gmail.com",
          },
        ];

        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        console.log('-----',user,users)

        if (!user) {
          throw new Error("Invalid username or password");
        }

        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
})