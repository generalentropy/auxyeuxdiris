function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center rounded-2xl bg-lightGrey py-4 xl:py-12">
      <div className="text-2xl font-bold xl:text-5xl">{title}</div>
      {subtitle && (
        <div className="text-center text-sm font-light xl:text-xl">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
