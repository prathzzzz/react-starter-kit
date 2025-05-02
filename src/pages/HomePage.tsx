import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { authService } from "@/services/auth.service"
import { useNavigate } from "react-router-dom"
import { showCustomToast } from "@/App"

export function HomePage() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      showCustomToast("error", "No token found. Please log in again.")
      navigate("/login")
      return
    }
    try {
      const response = await authService.logout(token)
      if (response.success) {
        localStorage.removeItem("token")
        showCustomToast("error", "Logged out successfully!")
        navigate("/login")
      } else {
        showCustomToast("error", response.message || "Logout failed")
      }
    } catch (error: any) {
      showCustomToast("error", error.message || "Logout failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-muted/80">
      <Card className="w-full max-w-md border shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to Your Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            You have successfully registered and logged in!
          </p>
          <Button className="w-full">Get Started</Button>
          <Button className="w-full" variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 