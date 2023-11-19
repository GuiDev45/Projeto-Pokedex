import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/authHooks";

interface LoginForm {
  email: string;
  senha: string;
}

export default function Login() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<LoginForm>();

  const handleLogin = async ({ email, senha }: LoginForm) => {
    try {
      login(email, senha);

      if (user) {
        navigate("/pokedex");
      }
    } catch (error) {
      console.error("Erro ao fazer o login:", error);
    }
  };

  return (
    <>
      <div>
        <h3>{loading}</h3>
        <img
          className="w-96 h-28"
          src="/img/logo-pokedex.png"
          alt="Logo PokéDex"
        />
      </div>

      <section>
        <h1>Campo que aparece o pokemon</h1>
      </section>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h2>Log In</h2>
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
          placeholder="Password"
          {...register("senha")}
        />
        <br />
        <a href="#">Esqueceu a senha?</a>
        <br />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Entrar
        </button>
        <br />
        <br />
        <Link to="/register" className="bg-green-500 text-white px-4 py-2">
          Não tem uma conta? Cadastre-se
        </Link>
      </form>
    </>
  );
}
