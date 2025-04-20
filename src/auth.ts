import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        if(credentials.email === 'first@gmail.com' && credentials.password === '123123123'){
          user = {
            name: 'First User',
            email: 'first@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/1019270?v=4',
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        }
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },
    }),
  ],
})