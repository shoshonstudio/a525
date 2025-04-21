"use client"

import { credentialsLogin } from "@/app/actions/auth"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn } from "@/auth"

const LoginForm = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(email !== "" || password !== ""){
            await credentialsLogin(email, password);
        }
            
    }

  return (
    <Card className="p-4">
    <CardHeader className="p-0">
      <CardTitle>Sign In</CardTitle>
      <CardDescription>
        Enter your credentials to sign in to your account.
      </CardDescription>
    </CardHeader>
    <form
      className="flex flex-col gap-2 w-full max-w-sm"
        onSubmit={handleSubmit}
      >
      <Label className="flex flex-col">
        Email
        <Input name="email" type="email" onChange={(e) => setEmail(e.target.value)} required/>
      </Label>
      <Label className="flex flex-col">
        Password
        <Input name="password" type="password" onChange={(e) => setPassword(e.target.value)} required/>
      </Label>
      <Button>Sign In</Button>
    </form>
    <hr />
    </Card>
  )
}

export default LoginForm