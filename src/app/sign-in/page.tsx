import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
 
export default function SignInPage() {
  return (
    <main className='min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-gray-800'>
      <Card className="p-4">
      <CardHeader className="p-0">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to sign in to your account.
        </CardDescription>
      </CardHeader>
      <form
        className="flex flex-col gap-2 w-full max-w-sm"
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
          // console.log(formData)
        }}
        >
        <Label className="flex flex-col">
          Email
          <Input name="email" type="email" />
        </Label>
        <Label className="flex flex-col">
          Password
          <Input name="password" type="password" />
        </Label>
        <Button>Sign In</Button>
      </form>
      </Card>
    </main>
  )
}