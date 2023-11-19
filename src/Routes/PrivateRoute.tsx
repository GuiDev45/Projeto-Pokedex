import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { AuthContext } from "../Contexts/AuthContext";

interface ProtectedProps {
  children: ReactNode;
}

export function Protected({ children }: ProtectedProps) {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.user) {
    return <Navigate to="/pokedex" replace />;
  } else {
    return <>{children}</>;
  }
}
