import { useEffect, useState } from "react";
import { getCurrentSession, logout, signIn } from "../../lib/appwriteClient";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../contexts/useGlobalContext";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useGlobalContext();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const session = await signIn(email, password);

      if (session) {
        const userDetails = await getCurrentSession();
        setUser(userDetails);
        setIsLoggedIn(true);

        toast.success("Connexion réussie");

        return session;
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      toast.error(error.message);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(user, isLoggedIn);
  }, [user, isLoggedIn]);

  if (isLoading)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200 px-2">
        <Loading />
      </div>
    );

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200">
      <img src="images/le_g.png" className="h-52 w-auto" />
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              className="flex w-full rounded p-2"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="flex w-full rounded p-2"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-green-500 px-8 py-2 font-bold text-white transition-colors hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center gap-2">
          <Link
            to="/"
            className="w-full rounded-full bg-gray-500 px-8 py-2 text-center font-normal text-white transition-colors hover:bg-gray-700"
          >
            Retour au site
          </Link>

          {!setIsLoggedIn && (
            <button
              className="rounded-full bg-red-500 px-8 py-2 font-bold text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

function Loading() {
  return (
    <>
      <ThreeDots
        visible={true}
        height="40"
        width="50"
        color="#132136"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </>
  );
}
