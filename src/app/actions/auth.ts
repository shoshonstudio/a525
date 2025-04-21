"use server"

import { signIn, signOut } from "@/auth"

export const loginEmail = async () => {
    await signIn("email", {
        redirectTo: "/dashboard",
    });
}

export const loginSocial = async () => {
    await signIn("github", {
        redirectTo: "/dashboard",
    });
}

export const loginGoogle = async () => {
    await signIn("google", {
        redirectTo: "/dashboard",
    });
}

export const logout = async () => {
    await signOut({ redirectTo: "/" });
}

export const credentialsLogin = async (email: string, password: string) => {

    console.log('IN ACTION: ',email, password)

    try {
        await signIn("credentials", {
            email: email as string,
            password: password as string,
            redirectTo: "/",
        });
    } catch (err) {
        console.log(err)
        return {message: "Invalid username or password"}
    }
}