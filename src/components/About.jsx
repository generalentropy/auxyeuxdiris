function About() {
  return (
    <div className="mb-10 flex h-full max-h-[570px] rounded-2xl">
      <div className="flex flex-col items-center justify-around rounded-l-2xl bg-accent xl:min-w-[530px]">
        <div className="text-6xl font-bold text-white">Qui suis-je ?</div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-extrabold text-primary">
            José Chédotal
          </div>
          <div className="text-3xl font-light italic text-white">
            Lash Stylist
          </div>
          <div className="py-4 text-xl font-bold text-[#B48321]">
            Cil à Cil & Volume Russe
          </div>
        </div>

        <InstaLink />
      </div>
      <div className="grow overflow-hidden rounded-r-3xl">
        <img src="/images/jose.jpg" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default About;

function InstaLink({ link }) {
  return (
    <div className="flex">
      <a
        className="rounded-full bg-primary px-16 py-3 text-xl font-bold text-white"
        href={link ? link : "#"}
      >
        @AuxYeuxdIris
      </a>
    </div>
  );
}
