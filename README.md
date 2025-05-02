# React + TypeScript Authentication Starter

A modern, fully-featured authentication starter kit built with React, TypeScript, and Shadcn/UI. Features a beautiful, responsive UI with dark mode support.

## Features

- 🔐 **Complete Authentication Flow**
  - User Registration
  - Login
  - Logout
  - Token Management

- 🎨 **Modern UI Components**
  - Built with Shadcn/UI
  - Responsive Design
  - Dark Mode Support
  - Beautiful Toast Notifications
  - Form Validation

- 🛠️ **Technical Stack**
  - React + TypeScript
  - React Query for API Management
  - React Hook Form + Zod for Form Validation
  - Axios for API Calls
  - Tailwind CSS for Styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
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

The app will be available at `http://localhost:5173`

## Environment Setup

The application expects a backend server running at `http://localhost:8080`. Make sure your backend server is running and provides the following endpoints:

- POST `/api/v1/auth/register` - User Registration
- POST `/api/v1/auth/login` - User Login
- POST `/api/v1/auth/logout` - User Logout

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── theme/
│   │   └── ThemeProvider.tsx
│   └── ui/
│       └── (shadcn components)
├── lib/
│   ├── api-client.ts
│   └── validations/
│       └── auth.ts
├── pages/
│   └── HomePage.tsx
└── services/
    └── auth.service.ts
```

## Features in Detail

### Authentication

- **Registration**: Collects email and password
- **Login**: Email/password authentication
- **Logout**: Cleans up session and removes token
- **Token Management**: Automatically handles token storage

### UI/UX

- Responsive design that works on all devices
- Dark mode support
- Form validation with error messages
- Toast notifications for success/error feedback
- Loading states for better user experience

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
