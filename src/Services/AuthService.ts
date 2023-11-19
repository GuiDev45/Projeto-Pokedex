// Importa funções utilitárias de autenticação do arquivo authUtils
import { registerLogin, loginUser, logoutUser } from "../utils/authUtils";

// Função assíncrona para realizar o registro/login de um usuário
export const registerLoginFunction = async (
  email: string,
  password: string,
) => {
  try {
    // Chama a função de registro/login do authUtils
    const userProps = await registerLogin(email, password);

    // Retorna as propriedades do usuário após o registro/login bem-sucedido
    return userProps;
  } catch (error) {
    // Em caso de erro, registra no console e propaga o erro para quem chamou a função
    console.error("Erro ao fazer o Cadastro:", error);
    throw error;
  }
};

// Função assíncrona para realizar o login de um usuário
export const loginFunction = async (email: string, password: string) => {
  try {
    // Chama a função de login do authUtils
    const userProps = await loginUser(email, password);

    // Retorna as propriedades do usuário após o login bem-sucedido
    return userProps;
  } catch (error) {
    // Em caso de erro, registra no console e propaga o erro para quem chamou a função
    console.error("Erro ao fazer o login:", error);
    throw error;
  }
};

// Função assíncrona para realizar o logout de um usuário
export const logoutFunction = async () => {
  try {
    // Chama a função de logout do authUtils
    await logoutUser();
  } catch (error) {
    // Em caso de erro, registra no console e propaga o erro para quem chamou a função
    console.error("Erro ao fazer o logout:", error);
    throw error;
  }
};
