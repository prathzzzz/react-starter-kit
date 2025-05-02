import { LoginForm } from "@/components/auth/LoginForm"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-muted/80 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md p-6">
        <LoginForm />
      </div>
    </div>
  )
} 