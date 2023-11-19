// Importa a função useContext do React para acessar o contexto
import { useContext } from "react";

// Importa o contexto de autenticação (AuthContext) e seu tipo de dados (AuthContextData)
import { AuthContext, AuthContextData } from "../Contexts/AuthContext";

// Define o hook useAuth que retorna o contexto de autenticação
export const useAuth = (): AuthContextData => {
  // Utiliza a função useContext para obter o valor do contexto de autenticação
  const context = useContext(AuthContext);

  // Se o contexto não estiver definido, lança um erro indicando que useAuth deve ser usado dentro de um AuthProvider
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  // Retorna o contexto de autenticação
  return context;
};
