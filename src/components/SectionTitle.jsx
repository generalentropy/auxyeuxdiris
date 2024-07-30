function SectionTitle({ title, subtitle, Icon, iconSize = 24, iconStyle }) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center rounded-2xl bg-lightGrey py-4 text-primary xs:py-8 lg:py-12">
      <div className="mb-1 flex items-center justify-center text-2xl font-bold sm:text-3xl lg:text-5xl">
        {Icon && <Icon size={iconSize} className={iconStyle || ""} />} {title}
      </div>
      {subtitle && (
        <div className="mx-3 text-center text-sm font-light md:text-base lg:text-xl">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
