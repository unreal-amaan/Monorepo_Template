import { betterAuth, Auth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "@repo/db";

export const auth: Auth = betterAuth({
    appName: "KeySprint",
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    baseURL: process.env.BETTER_AUTH_URL!,
    secretKey: process.env.BETTER_AUTH_SECRET!,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            redirectURI: process.env.GOOGLE_REDIRECT_URL!,
            authorization: {
                params: {
                    accessType: "offline",
                    prompt: "select_account consent",
                },
            },
        },
    },
    trustedOrigins: [process.env.CLIENT_URL!],
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 15 * 60,
        },
    },
});
