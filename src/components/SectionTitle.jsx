function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center rounded-3xl bg-lightGrey py-12">
      <div className="text-5xl font-bold">{title}</div>
      {subtitle && <div className="text-xl font-light">{subtitle}</div>}
    </div>
  );
}

export default SectionTitle;
