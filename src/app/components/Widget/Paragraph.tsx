const Paragraph = ({ spans, style }: { spans: (string | null)[]; style: { color: string; fontWeight: string }[] }) => {
  return (
    <>
      {spans.map((span, index) =>
        span !== null ? (
          <span key={index} className={`text-lg lg:text-xl mb-5  ${style[index]?.color} ${style[index]?.fontWeight}`}>
            {span}{" "}
          </span>
        ) : null
      )}
    </>
  );
};

export default Paragraph;
