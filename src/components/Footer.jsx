import { HashLink } from "react-router-hash-link";
import { socialLinks } from "../../config/global";

function Footer() {
  const currentYear = new Date().getFullYear();
  const iconStyle = "sm:h-12 h-10 lg:h-14";
  const { instagram, googleMaps } = socialLinks;

  return (
    <div className="mb-2 flex items-center justify-center rounded-2xl bg-accent px-2 pb-3 pt-6 sm:pt-10 lg:pb-6 lg:pt-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src="/images/logo-footer.svg"
          alt=""
          className="sm:h-22 h-24 lg:h-32"
        />
        <div className="flex items-center justify-center gap-6 py-2 lg:py-4">
          <a href={instagram} aria-label="Nous suivre sur Instagram">
            <img src="icons/instagram.svg" alt="" className={iconStyle} />
          </a>
          <a href={googleMaps} aria-label="Consulter la page Google Maps">
            <img src="icons/google.svg" alt="" className={iconStyle} />
          </a>
        </div>
        <div>
          <ul className="flex gap-3 text-xs font-semibold text-white xs:text-sm sm:text-lg lg:gap-6 lg:py-2">
            <li>
              <HashLink to="#tarifs">Tarifs</HashLink>
            </li>
            <li>
              <HashLink to="#faq">F.A.Q </HashLink>
            </li>
            <li>
              <HashLink to="#nous-situer">Adresse</HashLink>
            </li>
            <li>
              <HashLink to="#horaires">Horaires</HashLink>
            </li>
            <li>
              <HashLink to="#realisations">Réalisations</HashLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center px-2 text-center text-xs text-white lg:text-sm">
          <p>© 2017-{currentYear} | Aux Yeux d&lsquo;Iris </p>
          <p>
            Entreprise Individuelle enregistrée à la Chambre des Métiers et de
            l&lsquo;Artisanat
          </p>
          <p>SIRET : 829 575 703 - 47, La Plaie - 44160 Pontchâteau</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
