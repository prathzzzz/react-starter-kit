# React + TypeScript Authentication Starter

A modern authentication starter kit built with React, TypeScript, and Shadcn/UI. This project provides a complete authentication flow with a beautiful, responsive UI and dark mode support.

## Features

- Complete authentication flow (login, register, logout)
- Modern UI components with Shadcn/UI
- Dark mode support
- Form validation with Zod
- State management with Redux Toolkit
- Toast notifications
- Responsive design

## Technical Stack

- React 18
- TypeScript
- Vite
- Redux Toolkit for state management
- React Query for data fetching
- React Router for navigation
- Zod for form validation
- Shadcn/UI for components
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/starter-kit-react.git
cd starter-kit-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Environment Setup

This project requires a backend server with the following API endpoints:

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

Update the API base URL in `src/services/auth.service.ts` to match your backend server.

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── AuthNav.tsx
│   ├── ui/
│   │   └── ... (Shadcn/UI components)
│   └── theme/
│       ├── ThemeProvider.tsx
│       └── ThemeToggle.tsx
├── pages/
│   ├── HomePage.tsx
│   └── ... (other pages)
├── services/
│   └── auth.service.ts
├── store/
│   ├── index.ts
│   └── slices/
│       └── authSlice.ts
├── lib/
│   └── validations/
│       └── auth.ts
└── App.tsx
```

## Features in Detail

### Authentication

- **Login**: Secure login with email and password
- **Register**: User registration with validation
- **Logout**: Secure logout with token invalidation
- **Protected Routes**: Automatic redirection for unauthenticated users

### State Management

- **Redux Toolkit**: Centralized state management
- **Auth Slice**: Handles authentication state and actions
- **Persistent Storage**: Token persistence in localStorage

### UI/UX

- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Form Validation**: Real-time validation with Zod
- **Toast Notifications**: User feedback for actions
- **Loading States**: Visual feedback during async operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
