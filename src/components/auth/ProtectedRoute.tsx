import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useSelector((state: RootState) => state.auth);
  const localToken = localStorage.getItem("token");

  if (!token || !localToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
} 