import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { showCustomToast } from "@/App"
import { useDispatch } from "react-redux"
import { logout } from "@/store/slices/authSlice"
import { AppDispatch } from "@/store"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

export function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      showCustomToast("error", "Logged out successfully!")
      navigate("/login")
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
          <Button 
            className="w-full" 
            variant="outline" 
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? "Logging out..." : "Logout"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 