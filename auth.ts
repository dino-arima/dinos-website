import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
//import bcrypt from 'bcrypt';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          //
          const parsedCredentials = z
            .object({ password: z.string().min(4) })
            .safeParse(credentials);
   
          if (parsedCredentials.success) {
            const user = parsedCredentials.data;

            console.log(user);
            // 簡易比較
            const passwordsMatch = user.password === process.env.USER_PASSWORD;
            if (passwordsMatch) {
              return {id: 'admin'};
            }
          }
   
          return null;
        },
      }),
    ],
});
  