function Footer() {
  const currentYear = new Date().getFullYear();
  const iconStyle = "h-12";

  return (
    <div className="mb-2 flex items-center justify-center rounded-2xl bg-accent px-2 pb-2 pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src="/images/logo-footer.svg" alt="" className="h-28" />
        <div className="flex items-center justify-center gap-6">
          <img src="icons/instagram.svg" alt="" className={iconStyle} />
          <img src="icons/google.svg" alt="" className={iconStyle} />
        </div>
        <div>
          <ul className="flex gap-4 font-semibold text-white">
            <li>Tarifs</li>
            <li>F.A.Q</li>
            <li>Adresse</li>
            <li>Horaires</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-sm text-white">
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
