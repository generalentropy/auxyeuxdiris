function Highlights() {
  return (
    <div className="my-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
      <Element
        title="Produits certifiés "
        iconUrl="icons/checkmark.svg"
        subtitle="Tous nos produits cosmétiques sont enregistrés au Portail Européen des Cosmétiques (CPNP) et conformes au règlement CE (1223/2009)."
      />
      <Element
        title="Praticien diplômé"
        iconUrl="icons/award.svg"
        subtitle="Praticien diplômé et en formation continue pour être toujours à la pointe de l’innovation."
      />
    </div>
  );
}

export default Highlights;

function Element({ title, iconUrl, subtitle }) {
  return (
    <div className="flex max-w-[800px] text-primary">
      <div className="flex min-h-[200px] min-w-[200px] items-center justify-center rounded-l-2xl bg-accent">
        <img src={iconUrl} />
      </div>
      <div className="flex grow flex-col items-center justify-center rounded-r-3xl bg-lightGrey">
        <div className="mb-2 text-4xl font-bold">{title}</div>
        <div className="max-w-[330px] text-sm">{subtitle}</div>
      </div>
    </div>
  );
}
