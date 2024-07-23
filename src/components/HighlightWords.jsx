const HighlightWords = (text, words) => {
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    words.includes(part.toLowerCase()) ? (
      <span className="font-bold" key={index}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export default HighlightWords;
