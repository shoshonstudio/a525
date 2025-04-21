"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

// import { signIn, signOut } from "@/auth";
import { loginEmail, logout } from "@/app/actions/auth";
// import { loginEmail, logout } from "@/lib/actions/auth";

export default function AuthButton() {
    const { data: session } = useSession();

    return session ? (
      <Button onClick={() => logout()}>Sign Out</Button>
    ) : (
      <Button onClick={() => loginEmail()}>Sign In</Button>
    );
}