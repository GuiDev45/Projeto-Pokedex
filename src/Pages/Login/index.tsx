export default function Login() {
  return (
    <>
      <div>
        <img
          className="w-96 h-28"
          src="/img/logo-pokedex.png"
          alt="Logo PokéDex"
        />
      </div>
      <section>
        <h1>Campo que aparece o pokemon</h1>
      </section>
      <form>
        <h2>Log In</h2>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="border-2 border-green-500"
          type="text"
          id="email"
          name="email"
        />
        <br />
        <label htmlFor="senha">Senha</label>
        <br />
        <input
          className="border-2 border-green-500"
          type="password"
          id="senha"
          name="senha"
        />
        <br />
        <a href="#">Esqueceu a senha?</a>
        <br />
        <button className="bg-green-500 text-white px-4 py-2">Entrar</button>
        <br />
        <br />
        <button className="bg-green-500 text-white px-4 py-2">
          Não tem uma conta? Cadastre-se
        </button>
      </form>
    </>
  );
}
