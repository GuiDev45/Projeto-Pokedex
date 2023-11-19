import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/authHooks";

interface LoginForm {
  email: string;
  senha: string;
}

export default function Register() {
  const { user, registerLogin } = useAuth();

  const { handleSubmit, register } = useForm<LoginForm>();

  const handleRegister = ({ email, senha }: LoginForm) => {
    const userForm = {
      email,
      senha,
    };
    registerLogin(userForm.email, userForm.senha);
  };

  return (
    <div>
      <main>REGISTER</main>
      <form onSubmit={handleSubmit(handleRegister)}>
        <h2>Log In</h2>
        <p>{user?.email}</p>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="border-2 border-green-500"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <br />
        <label htmlFor="senha">Senha</label>
        <br />
        <input
          className="border-2 border-green-500"
          type="password"
          placeholder="Digite sua senha"
          {...register("senha")}
        />
        <br />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
