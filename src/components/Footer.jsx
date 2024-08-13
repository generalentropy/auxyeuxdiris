import { socialLinks } from "../../config/global";
import { Link } from "react-router-dom";
import { triggerConfetti } from "../../utils/confetti";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  const iconStyle = "sm:h-12 h-10 lg:h-14";
  const { instagram, googleMaps } = socialLinks;
  const linkStyle = `relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-220 after:origin-center`;

  return (
    <div className="mb-2 flex items-center justify-center rounded-2xl bg-accent px-2 pb-3 pt-6 sm:pt-10 lg:pb-6 lg:pt-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          onClick={() => triggerConfetti("stars")}
          src="/images/logo-footer.svg"
          alt=""
          className="sm:h-22 h-24 lg:h-28"
        />
        <div className="flex items-center justify-center gap-6 py-2 lg:py-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={instagram}
            aria-label="Nous suivre sur Instagram"
          >
            <img src="icons/instagram.svg" alt="" className={iconStyle} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={googleMaps}
            aria-label="Consulter la page Google Maps"
          >
            <img src="icons/google.svg" alt="" className={iconStyle} />
          </motion.a>
        </div>
        <div>
          <ul className="flex gap-3 text-xs font-semibold text-white xs:text-sm sm:text-lg lg:gap-6 lg:py-2">
            <li>
              <Link to="#tarifs" className={linkStyle}>
                Tarifs
              </Link>
            </li>
            <li>
              <Link to="#faq" className={linkStyle}>
                F.A.Q{" "}
              </Link>
            </li>
            <li>
              <Link to="#nous-situer" className={linkStyle}>
                Adresse
              </Link>
            </li>
            <li>
              <Link to="#horaires" className={linkStyle}>
                Horaires
              </Link>
            </li>
            <li>
              <Link to="#realisations" className={linkStyle}>
                Réalisations
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center px-2 text-center text-xs text-white lg:text-sm">
          <p>
            © 2017-{currentYear} |{" "}
            <Link to="/dashboard">Aux Yeux d&lsquo;Iris</Link>{" "}
          </p>
          <p>
            Entreprise Individuelle enregistrée à la Chambre des Métiers et de
            l&lsquo;Artisanat
          </p>
          <p>SIRET : 829 575 703 - 47, La Plaie - 44160 Pontchâteau </p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold italic text-white">
            Développé en
            <img
              src="/icons/france.svg"
              alt="drapeau français"
              className="h-3 px-1"
            />
            par
            <a href="https://visualartisan.fr/">
              <span className="text relative block w-fit not-italic after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition after:duration-200 after:content-[''] after:hover:scale-x-100">
                Visual·Artisan
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
