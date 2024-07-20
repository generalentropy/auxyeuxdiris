const linkStyle = `bg-lightGrey rounded-full px-10 py-3 font-bold text-lg text-primary hover:bg-greyDarker transition-colors hover:text-white`;

function Menu() {
  return (
    <nav>
      <div>
        <ul className="hidden items-center justify-between py-12 xl:flex">
          <li>
            <a className={linkStyle} href="#about">
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
              src="/images/logo_auxyeuxdiris.svg"
              alt="Logo Aux Yeux d'Iris"
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
