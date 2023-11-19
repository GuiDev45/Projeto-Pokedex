// Importa os módulos necessários do React e do Firebase
import {
  createContext,
  useEffect,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";
import { fireAuth } from "../Services/firebaseConfig";
import {
  UserProps,
  registerLogin,
  loginUser,
  logoutUser,
} from "../utils/authUtils";
import { onAuthStateChanged } from "firebase/auth";

// Define o tipo de dado para o contexto de autenticação
export type AuthContextData = {
  user: UserProps | null;
  loading: boolean;
  registerLogin: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

// Cria o contexto de autenticação
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

// Componente funcional que atua como provedor de autenticação
export default function AuthProvider({ children }: PropsWithChildren) {
  // Estado para armazenar informações do usuário e o status de carregamento
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);

  // Efeito que observa as mudanças no estado de autenticação do usuário
  useEffect(() => {
    // Adiciona um listener para observar as mudanças de autenticação
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        // Se houver um usuário autenticado, atualiza o estado do usuário
        setUser({
          email: user.email || "",
          senha: "",
        });
      } else {
        // Se não houver usuário autenticado, define o usuário como nulo
        setUser(null);
      }
    });
    // Retorna uma função de limpeza para desinscrever o listener quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  // Resumo o useMemo -> O useMemo é utilizado para memoizar valores computados. Ele aceita uma função e um array de dependências. A função é executada, e o    resultado é memoizado até que as dependências mudem. Se as dependências não mudarem, o hook retorna o valor memoizado sem recalcular.
  // Callback de registro e login, usando useMemo para evitar recriações desnecessárias
  const registerLoginCallback = useMemo(
    () => async (email: string, password: string) => {
      try {
        setLoading(true);
        // Chama a função de registro/login e atualiza o estado do usuário
        const userProps = await registerLogin(email, password);
        setUser(userProps);
      } catch (error) {
        console.error("Erro ao fazer o Cadastro:", error);
      } finally {
        // Define o status de carregamento como falso, independentemente do resultado
        setLoading(false);
      }
    },
    [],
  );

  // Callback de login, usando useMemo para evitar recriações desnecessárias
  const loginCallback = useMemo(
    () => async (email: string, password: string) => {
      try {
        setLoading(true);
        // Chama a função de login e atualiza o estado do usuário
        const userProps = await loginUser(email, password);
        setUser(userProps);
      } catch (error) {
        console.error("Erro ao fazer o login:", error);
      } finally {
        // Define o status de carregamento como falso, independentemente do resultado
        setLoading(false);
      }
    },
    [],
  );

  // Callback de logout, usando useMemo para evitar recriações desnecessárias
  const logoutCallback = useMemo(
    () => async () => {
      try {
        setLoading(true);
        // Chama a função de logout e define o usuário como nulo
        await logoutUser();
        setUser(null);
      } catch (error) {
        console.error("Erro ao fazer o logout:", error);
      } finally {
        // Define o status de carregamento como falso, independentemente do resultado
        setLoading(false);
      }
    },
    [],
  );

  // Memoiza o valor do contexto para evitar re-renderizações desnecessárias
  const memoizedValue = useMemo(
    () => ({
      user,
      loading,
      registerLogin: registerLoginCallback,
      login: loginCallback,
      logout: logoutCallback,
    }),
    [user, loading, registerLoginCallback, loginCallback, logoutCallback],
  );

  // Retorna o provedor de contexto com o valor memoizado
  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
