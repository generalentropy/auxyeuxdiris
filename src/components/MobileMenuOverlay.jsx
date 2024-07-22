import { useLockBodyScroll } from "@uidotdev/usehooks";

function MobileMenuOverlay() {
  const linkStyle = `font-bold text-2xl lg:text-5xl text-white`;
  useLockBodyScroll();

  return (
    <div className="fixed z-10 flex h-screen w-screen items-center justify-center bg-primary xl:hidden">
      <nav>
        <ul className="flex max-h-[400px] flex-col items-center justify-center gap-4">
          <li>
            <a className={linkStyle} href="#about">
              Prestations
            </a>
          </li>

          <li>
            <a className={linkStyle} href="#about">
              Tarifs
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
      </nav>
    </div>
  );
}

export default MobileMenuOverlay;
