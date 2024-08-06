import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { Link } from "react-router-dom";

function MobileMenuOverlay() {
  const linkStyle = `relative text-4xl w-fit block after:block after:content-[''] after:absolute after:h-[6px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white font-bold`;
  useLockBodyScroll();

  const { setIsMobileMenuOpen, isMobileMenuOpen } = useGlobalContext();
  const handleOpenMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed z-20 flex h-screen w-screen items-center justify-center bg-primary xl:hidden">
      <nav>
        <ul className="flex max-h-[400px] flex-col items-center justify-center gap-4">
          <li>
            <Link className={linkStyle} to="#tarifs" onClick={handleOpenMenu}>
              Prestations
            </Link>
          </li>

          <li>
            <Link className={linkStyle} to="#tarifs" onClick={handleOpenMenu}>
              Tarifs
            </Link>
          </li>

          <li>
            <Link to="#contact" className={linkStyle} onClick={handleOpenMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#nous-situer"
              className={linkStyle}
              onClick={handleOpenMenu}
            >
              Nous situer
            </Link>
          </li>
          <li>
            <Link to="#horaires" className={linkStyle} onClick={handleOpenMenu}>
              Horaires
            </Link>
          </li>
          <li>
            <Link
              to="#realisations"
              className={linkStyle}
              onClick={handleOpenMenu}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link className={linkStyle} to="#faq" onClick={handleOpenMenu}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenuOverlay;
