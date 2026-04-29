'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [emailInput, setEmailInput] = useState("")
  const [passwdInput, setPasswdInput] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput,
      password: passwdInput
    })

    if (error) {
      console.error('Login error:', error.message)
      // Optionally, display an error message to the user
      alert(`Login failed: ${error.message}`)
      return
    }

    if (data.session) {
      const params = new URLSearchParams(window.location.search)
      const next = params.get('next') || '/'
      window.location.href = next
    } else {
      // This case should ideally not happen if error is null, but good for safety
      console.error('Login successful but no session found.')
      alert('Login succeeded but session data is missing. Please try again.')
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={
                    (e) => {
                      setEmailInput(e.target.value)
                    }
                  }
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password"
                  onChange={
                    (e) => {
                      setPasswdInput(e.target.value)
                    }
                  }
                  required />
              </Field>
              <Field >
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
