interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  direction = "left",
  speed = 18,
  className = "",
  separator = "✦",
}: MarqueeProps) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${animClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-inherit"
          >
            {item}
            <span className="mx-4 opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
