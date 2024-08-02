import { HashLink } from "react-router-hash-link";
import { triggerConfetti } from "../../utils/confetti";

const linkStyle = `bg-lightGrey rounded-full px-10 py-3 font-bold text-lg text-primary hover:bg-greyDarker transition-colors hover:text-white`;

function Menu() {
  return (
    <nav>
      <div>
        <ul className="hidden items-center justify-between py-12 xl:flex">
          <li>
            <HashLink smooth className={linkStyle} to="#tarifs">
              Prestations & tarifs
            </HashLink>
          </li>
          <li>
            <HashLink smooth className={linkStyle} to="#faq">
              FAQ
            </HashLink>
          </li>
          <li>
            <img
              onClick={() => triggerConfetti("stars")}
              src="/images/logo_auxyeuxdiris.svg"
              alt="Logo Aux Yeux d'Iris"
              className="w-38"
            />
          </li>
          <li>
            <HashLink to="#contact" className={linkStyle}>
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#realisations" className={linkStyle}>
              Réalisation
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
