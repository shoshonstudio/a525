import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import AuthButtonClient from "./AuthButton.client";

export default async function AuthButton() {
  const session = await auth();
  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
    };
  }

  return (
    <SessionProvider basePath={process.env.NEXT_PUBLIC_BASE_URL} session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
}