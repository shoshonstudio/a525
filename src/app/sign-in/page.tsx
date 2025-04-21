import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { loginEmail } from "@/app/actions/auth"
import LoginForm from "@/components/LoginForm"
 
export default function SignInPage() {
  return (
    <main className='min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-gray-800'>
      <LoginForm />
    </main>
  )
}