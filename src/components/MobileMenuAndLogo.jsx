import Hamburger from "hamburger-react";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import classNames from "classnames";
import { triggerConfetti } from "../../utils/confetti";

function MobileMenuAndLogo() {
  const { setIsMobileMenuOpen, isMobileMenuOpen } = useGlobalContext();
  const handleOpenMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative flex justify-center xl:hidden">
      <div className="my-8 flex w-full items-center justify-center">
        <div
          className={classNames("fixed right-4 z-30 cursor-pointer", {
            "text-white": isMobileMenuOpen,
            "rounded-md bg-white bg-opacity-50 text-primary": !isMobileMenuOpen,
          })}
        >
          <Hamburger
            toggle={handleOpenMenu}
            toggled={isMobileMenuOpen}
            rounded
            size={36}
            lineWidth={4}
            label={`${isMobileMenuOpen ? "Fermer le menu" : "Afficher le menu"}`}
          />
        </div>
        <img
          onClick={() => triggerConfetti("stars")}
          src="/images/logo_auxyeuxdiris.svg"
          alt="Logo Aux Yeux d'Iris"
          className="h-24 xs:h-28"
        />
      </div>
    </div>
  );
}

export default MobileMenuAndLogo;
