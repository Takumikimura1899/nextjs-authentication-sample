import NextAuth from 'next-auth';
import type { NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { getUser } from './api/user/actions';

declare module 'next-auth' {
  interface Session {
    user: {
      picture?: string;
    } & Omit<User, 'id'>;
  }
}

export const authConfig = {
  debug: true,
  providers: [
    GitHub,
    Credentials({
      credentials: { password: { label: 'Password', type: 'password' } },
      async authorize(c) {
        const user = await getUser(Number(c.password));
        if (!user) return null;
        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          image: '',
        };
      },
    }),
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
