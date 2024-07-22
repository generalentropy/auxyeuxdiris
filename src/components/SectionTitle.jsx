function SectionTitle({ title, subtitle }) {
  return (
    <div className="xs:py-8 mb-10 flex flex-col items-center justify-center rounded-2xl bg-lightGrey py-4 lg:py-12">
      <div className="text-2xl font-bold sm:text-3xl lg:text-5xl">{title}</div>
      {subtitle && (
        <div className="text-center text-sm font-light md:text-base lg:text-xl">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
