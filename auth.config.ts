import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname === '/login';

      // ログインページ
      if (isOnLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL('/', nextUrl));
        return true
      }

      if (isLoggedIn) {
        return true;
      }
      return false; // Redirect unauthenticated users to login page
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
