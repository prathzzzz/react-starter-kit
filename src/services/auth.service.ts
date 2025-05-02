import { apiClient } from "@/lib/api-client"

export interface RegisterRequest {
  email: string
  password: string
  roles?: string[]
}

export interface RegisterResponse {
  token: string
}

export const authService = {
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    try {
      const response = await apiClient.post<RegisterResponse>("/auth/register", data)
      return response.data
    } catch (error: any) {
      if (error.response?.data) {
        throw new Error(error.response.data.message || "Registration failed")
      }
      throw new Error(error.message || "An error occurred during registration")
    }
  },
  logout: async (token: string): Promise<{ message: string; success: boolean }> => {
    try {
      const response = await apiClient.post("/auth/logout", { token })
      return response.data
    } catch (error: any) {
      if (error.response?.data) {
        throw new Error(error.response.data.message || "Logout failed")
      }
      throw new Error(error.message || "An error occurred during logout")
    }
  },
  login: async (data: { email: string; password: string }): Promise<{ token: string }> => {
    try {
      const response = await apiClient.post<{ token: string }>("/auth/login", data)
      return response.data
    } catch (error: any) {
      if (error.response?.data) {
        throw new Error(error.response.data.message || "Login failed")
      }
      throw new Error(error.message || "An error occurred during login")
    }
  },
} 