import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function AuthNav() {
  const isLoggedIn = false // This will be replaced with actual auth state later

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">Welcome, User</span>
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </Link>
      )}
    </div>
  )
} 