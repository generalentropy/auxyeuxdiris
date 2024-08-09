import { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { getCurrentSession, logout } from "../../lib/appwriteClient";
import LoginForm from "../components/Login";
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";
import { MdLogout } from "react-icons/md";

function AdminDashboard() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useGlobalContext();
  const [loading, setIsLoading] = useState(true);
  const [notificationStatus, setNotificationStatus] = useState(false);
  const { isMobile } = useGlobalContext();

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsLoggedIn(false);
      toast.success("Déconnecté");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleToggleSwitch = () => {
    setNotificationStatus(!notificationStatus);
    toast("📌 Pense à valider les changements", {
      id: "validate",
      duration: 3000,
      style: { textAlign: "center" },
    });
  };

  const btnStyle =
    "bg-accent py-3 px-8 rounded-full text-white transition-colors";

  useEffect(() => {
    getCurrentSession()
      .then((res) => {
        if (res) {
          console.log(res);
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
          toast("Ben euh comment... ya pas de compte de connecté", {
            duration: 4000,
          });
          console.log("pas de compte trouvé");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoggedIn, setUser]);

  if (loading) return <LoadingUser />;

  if (!isLoggedIn) return <LoginForm />;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200 px-2">
      <div
        className="absolute right-2 top-2 cursor-pointer"
        onClick={handleLogout}
      >
        <MdLogout size={isMobile ? 32 : 42} title="Déconnexion" />
      </div>

      <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-2 border">
        <div className="flex gap-3">
          <label
            className="inline-block pl-[0.15rem] text-sm hover:cursor-pointer"
            htmlFor="activateWindow"
          >
            <p>Activer/Désactiver la fenêtre de notification</p>
          </label>
          <input
            onChange={handleToggleSwitch}
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-emerald-500 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#10b981]"
            type="checkbox"
            role="switch"
            id="activateWindow"
          />
        </div>
        <div> </div>
        <form className="flex w-full flex-col gap-2">
          <input
            type="text"
            className="rounded-2xl border bg-white p-4 placeholder:italic"
            placeholder="Titre de la fenêtre"
          ></input>

          <textarea
            rows={"6"}
            type="text"
            className="rounded-2xl border bg-white p-4 placeholder:italic"
            placeholder="Contenu de la fenêtre"
          ></textarea>
        </form>
        <div className="flex flex-col gap-4 pt-4 text-sm md:flex-row">
          <button className={`${btnStyle} hover:bg-accentDarker`}>
            Afficher l&lsquo;aperçu
          </button>
          <button className={`${btnStyle} bg-emerald-500 hover:bg-emerald-700`}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

function LoadingUser() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ThreeDots
        visible={true}
        height="40"
        width="50"
        color="#132136"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
