import { useState } from "react";
import { signIn } from "../../lib/appwriteClient";
import { ThreeDots } from "react-loader-spinner";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const session = await signIn(email, password);
      console.log(session);

      return session;
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200 px-2">
        <Loading />
      </div>
    );

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200 px-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-end gap-2">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="ml-2 rounded p-2"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="ml-2 rounded p-2"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-green-500 px-8 py-2 font-bold text-white transition-colors hover:bg-green-700"
        >
          Login
        </button>
      </form>
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
