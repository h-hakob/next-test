import NextAuth from "next-auth"
import "next-auth/jwt"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma";
import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcryptjs"

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        let user = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string
          }
        });

        if (!user || !compareSync(credentials.password as string, user.password)) {
          return null;
        }

        return user;
      }
    })
  ],
  basePath: "/auth",
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl

      if (pathname !== "/auth/signin") return !!auth

      return true
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name

      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }

      return session
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 3 * 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
