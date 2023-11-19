import AuthProvider from "./AuthContext";

// Aqui fica a responsabilidade de unir os providers que existem e os que vão existir
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
