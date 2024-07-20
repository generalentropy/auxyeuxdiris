import { useLockBodyScroll } from "@uidotdev/usehooks";

function MobileMenuOverlay() {
  const linkStyle = `font-bold text-2xl text-white`;
  useLockBodyScroll();

  return (
    <div className="fixed h-screen w-screen bg-primary xl:hidden">
      <nav>
        <div>
          <ul className="flex h-screen w-screen flex-col items-center justify-center">
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
    </div>
  );
}

export default MobileMenuOverlay;
