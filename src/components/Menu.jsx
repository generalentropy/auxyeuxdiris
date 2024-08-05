import { triggerConfetti } from "../../utils/confetti";
import { Link } from "react-router-dom";

const linkStyle = `bg-lightGrey rounded-full px-10 py-3 font-bold text-lg text-primary hover:bg-greyDarker transition-colors hover:text-white`;

function Menu() {
  return (
    <nav>
      <div>
        <ul className="hidden items-center justify-between py-12 xl:flex">
          <li>
            <Link to="#tarifs" className={linkStyle}>
              Prestations & tarifs
            </Link>
          </li>
          <li>
            <Link to="#faq" className={linkStyle}>
              FAQ
            </Link>
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
            <Link to="#contact" className={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#realisations" className={linkStyle}>
              Réalisation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
