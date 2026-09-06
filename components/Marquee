export default function Marquee() {
  const text = "HOSPITALITY · WORKPLACE · HOTELS · CAFÉS · RESTAURANTS · CO-WORKING · DESIGN PRECISION · SPACE PLANNING · MATERIAL · LIGHT · ";
  // Duplicate for seamless loop
  const items = Array(4).fill(text).join("");

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-text">{items}</span>
        <span className="marquee-text" aria-hidden="true">{items}</span>
      </div>
    </div>
  );
}
