import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { HomePage } from './pages/HomePage'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster, toast } from 'react-hot-toast'
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Provider } from 'react-redux'
import { store } from './store'

const queryClient = new QueryClient()

// Custom toast function
export function showCustomToast(type: "success" | "error", message: string) {
  toast.custom((t) => (
    <div
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg shadow-lg border w-[320px]",
        t.visible ? "animate-enter" : "animate-leave",
        type === "success"
          ? "bg-green-600 text-white border-green-700"
          : "bg-red-600 text-white border-red-700"
      )}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <span className="flex-1 font-medium">{message}</span>
    </div>
  ))
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-muted/80 relative">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
              </Routes>
            </div>
          </Router>
          <Toaster 
            position="top-right"
            toastOptions={{
              success: {
                icon: '✅',
              },
              error: {
                icon: '❌',
              },
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
