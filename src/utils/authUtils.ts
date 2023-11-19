// Importa tipos e funções relacionadas à autenticação do Firebase
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Importa a instância de autenticação do Firebase configurada
import { fireAuth } from "../Services/firebaseConfig";

// Define um tipo para as propriedades do usuário
export type UserProps = {
  email: string;
  senha: string;
};

// Função assíncrona para registrar um novo usuário
export const registerLogin = async (
  email: string,
  password: string,
): Promise<UserProps | null> => {
  try {
    // Chama a função createUserWithEmailAndPassword para criar um novo usuário no Firebase
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      fireAuth, // Usa a instância de autenticação do Firebase
      email, // E-mail fornecido
      password, // Senha fornecida
    );

    // Extrai o usuário autenticado da resposta
    const loggedInUser = userCredential.user;

    // Retorna um objeto contendo o e-mail do usuário e uma senha vazia
    return {
      email: loggedInUser.email || "", // Usa o e-mail do usuário ou uma string vazia se não existir
      senha: "", // Senha vazia (não é a senha real, apenas uma convenção neste contexto)
    };
  } catch (error) {
    // Captura e trata qualquer erro ocorrido durante o processo
    console.error("Erro ao fazer o Cadastro:", error);
    throw error; // Rejeita a Promise e propaga o erro para quem chama essa função
  }
};

// Função assíncrona para autenticar um usuário existente
export const loginUser = async (
  email: string,
  password: string,
): Promise<UserProps | null> => {
  try {
    // Chama a função signInWithEmailAndPassword para autenticar um usuário no Firebase
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      fireAuth, // Usa a instância de autenticação do Firebase
      email, // E-mail fornecido
      password, // Senha fornecida
    );

    // Extrai o usuário autenticado da resposta
    const loggedInUser = userCredential.user;

    // Retorna um objeto contendo o e-mail do usuário e uma senha vazia
    return {
      email: loggedInUser.email || "", // Usa o e-mail do usuário ou uma string vazia se não existir
      senha: "", // Senha vazia (não é a senha real, apenas uma convenção neste contexto)
    };
  } catch (error) {
    // Captura e trata qualquer erro ocorrido durante o processo
    console.error("Erro ao fazer o login:", error);
    throw error; // Rejeita a Promise e propaga o erro para quem chama essa função
  }
};

// Função assíncrona para fazer logout do usuário autenticado
export const logoutUser = async (): Promise<void> => {
  try {
    // Chama a função signOut para fazer logout do usuário no Firebase
    await signOut(fireAuth); // Usa a instância de autenticação do Firebase
  } catch (error) {
    // Captura e trata qualquer erro ocorrido durante o processo
    console.error("Erro ao fazer o logout:", error);
    throw error; // Rejeita a Promise e propaga o erro para quem chama essa função
  }
};
