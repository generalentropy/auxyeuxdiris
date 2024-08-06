import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center px-3 text-center text-primary">
      <p className="text-8xl font-bold md:text-9xl">404</p>
      <p className="py-2 text-lg">Oups ! Page non trouvée 🙈</p>
      <p className="">
        Il semble que la page que vous cherchez n&lsquo;existe pas.
      </p>
      <Button
        text="Retour à l'accueil"
        wrapperStyle="my-4 lg:my-8"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default NotFound;
