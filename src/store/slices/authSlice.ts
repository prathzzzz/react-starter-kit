import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '@/services/auth.service'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isAuthenticated = true
      state.error = null
      localStorage.setItem('token', action.payload)
    },
    logoutSuccess: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem('token')
    },
  },
})

// Thunk actions
export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await authService.login({ email, password })
    dispatch(loginSuccess(response.token))
    return response
  } catch (error: any) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const register = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true))
    const response = await authService.register({ email, password })
    dispatch(loginSuccess(response.token))
    return response
  } catch (error: any) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const logout = () => async (dispatch: any) => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      await authService.logout(token)
    }
    dispatch(logoutSuccess())
  } catch (error: any) {
    dispatch(setError(error.message))
    throw error
  }
}

export const { setLoading, setError, loginSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer 