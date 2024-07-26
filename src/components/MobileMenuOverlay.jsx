import { useLockBodyScroll } from "@uidotdev/usehooks";

function MobileMenuOverlay() {
  const linkStyle = `relative text-4xl w-fit block after:block after:content-[''] after:absolute after:h-[6px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white font-bold`;
  useLockBodyScroll();

  return (
    <div className="fixed z-20 flex h-screen w-screen items-center justify-center bg-primary xl:hidden">
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
