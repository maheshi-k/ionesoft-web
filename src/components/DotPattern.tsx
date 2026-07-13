export default function DotPattern() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 15}
            cy={10 + row * 15}
            r="2"
            fill="var(--primary)"
          />
        )),
      )}
    </svg>
  );
}
