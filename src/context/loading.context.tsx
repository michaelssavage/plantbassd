import { Router } from "next/router";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

interface LoadingContextI {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextI>({
  loading: false,
  setLoading: () => undefined,
});

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [setLoading]);

  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};
