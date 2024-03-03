import { ReactNode, useContext } from "react";
import { LoadingContext } from "context/loading.context";
import { Spinner } from "./Spinner";

export const Loading = ({ children }: { children: ReactNode }) => {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <Spinner />;
  }
  return children;
};
