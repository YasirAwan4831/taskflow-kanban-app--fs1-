import { createContext, useState, useEffect, useCallback } from 'react';
import { loginUser, registerUser, fetchMe } from '../services/authService';
import toast from 'react-hot-toast';

/**
 * AuthContext
 * Provides global authentication state and actions throughout the app.
 */
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('taskflow_token') || null);
  const [loading, setLoading] = useState(true); // True while verifying stored token

  // ─── On mount: verify stored token and restore user session ───────────────
  useEffect(() => {
    const restoreSession = async () => {
      if (token) {
        try {
          const data = await fetchMe();
          setUser(data.user);
        } catch {
          // Token invalid or expired — clear storage
          localStorage.removeItem('taskflow_token');
          localStorage.removeItem('taskflow_user');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };
    restoreSession();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Persist token to localStorage whenever it changes ────────────────────
  useEffect(() => {
    if (token) {
      localStorage.setItem('taskflow_token', token);
    } else {
      localStorage.removeItem('taskflow_token');
    }
  }, [token]);

  // ─── Login Action ──────────────────────────────────────────────────────────
  const login = useCallback(async (credentials) => {
    const data = await loginUser(credentials);
    setToken(data.token);
    setUser(data.user);
    toast.success(`Welcome back, ${data.user.name}! 👋`);
    return data;
  }, []);

  // ─── Register Action ───────────────────────────────────────────────────────
  const register = useCallback(async (userData) => {
    const data = await registerUser(userData);
    setToken(data.token);
    setUser(data.user);
    toast.success(`Account created! Welcome, ${data.user.name}! 🎉`);
    return data;
  }, []);

  // ─── Logout Action ─────────────────────────────────────────────────────────
  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('taskflow_token');
    localStorage.removeItem('taskflow_user');
    toast.success('Logged out successfully.');
  }, []);

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
