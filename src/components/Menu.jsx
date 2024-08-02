import { triggerConfetti } from "../../utils/confetti";

const linkStyle = `bg-lightGrey rounded-full px-10 py-3 font-bold text-lg text-primary hover:bg-greyDarker transition-colors hover:text-white`;

function Menu() {
  return (
    <nav>
      <div>
        <ul className="hidden items-center justify-between py-12 xl:flex">
          <li>
            <a className={linkStyle} to="tarifs">
              Prestations & tarifs
            </a>
          </li>
          <li>
            <a className={linkStyle} href="#offers">
              FAQ
            </a>
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
            <a href="#form" className={linkStyle}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className={linkStyle}>
              Réalisation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
