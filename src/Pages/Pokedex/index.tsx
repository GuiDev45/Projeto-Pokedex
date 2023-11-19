import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/authHooks";

export default function Pokedex() {
  const { user, logout } = useAuth();

  // Se o usuário não estiver autenticado, redirecione para a página de login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>POKÉDEX</h1>
      <p>{user.email}</p>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
