"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { CurrentUser } from "@/types/user";

interface AuthContext {
  user: CurrentUser | null;
  loading: boolean;
  refresh: () => void;
}

const AuthCtx = createContext<AuthContext>({
  user: null,
  loading: true,
  refresh: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user");
      const { user: rawUser } = await res.json();
      setUser({ ...rawUser, createdAt: new Date(rawUser.createdAt) });
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [pathname]);
  return (
    <AuthCtx.Provider value={{ user, loading, refresh: fetchUser }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
