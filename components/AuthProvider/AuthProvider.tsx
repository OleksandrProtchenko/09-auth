"use client";

import { getMe, refresh } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/userStore";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    async function fetchData() {
      await refresh();
      const data = await getMe();
      if (data) {
        setUser(data);
      }
    }

    fetchData();
  }, [setUser]);

  return children;
};

export default AuthProvider;
