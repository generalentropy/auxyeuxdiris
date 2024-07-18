function Button({ link, text, wrapperStyle, buttonStyle }) {
  return (
    <div className={`flex ${wrapperStyle ? wrapperStyle : ""}`}>
      <a
        href={`#${link ? link : ""}`}
        className={`bg-accent rounded-lg px-14 py-4 text-xl font-bold text-white ${buttonStyle ? buttonStyle : ""}`}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
