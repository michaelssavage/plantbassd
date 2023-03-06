import { createContext, ReactNode, useMemo, useState } from "react";

interface AppValues {
  showNewsletter: boolean;
  showSticky: boolean;
  setShowNewsletter: (value: boolean) => void;
  setShowSticky: (value: boolean) => void;
}

const defaultValues: AppValues = {
  showNewsletter: false,
  showSticky: true,
  setShowNewsletter: () => undefined,
  setShowSticky: () => undefined,
};

export const NewsletterContext = createContext<AppValues>(defaultValues);

export const NewsletterContextProvider = ({ children }: { children: ReactNode }) => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showSticky, setShowSticky] = useState(true);

  const value = useMemo(
    () => ({
      showNewsletter,
      showSticky,
      setShowNewsletter,
      setShowSticky,
    }),
    [showNewsletter, showSticky, setShowNewsletter, setShowSticky]
  );

  return <NewsletterContext.Provider value={value}>{children}</NewsletterContext.Provider>;
};
