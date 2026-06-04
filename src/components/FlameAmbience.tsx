const embers = Array.from({ length: 14 }, (_, index) => index + 1);

export function FlameAmbience() {
  return (
    <div className="site-flame-layer" aria-hidden="true">
      <span className="flame-bloom flame-bloom-left" />
      <span className="flame-bloom flame-bloom-right" />
      <span className="flame-bloom flame-bloom-bottom" />
      <span className="flame-ribbon flame-ribbon-left" />
      <span className="flame-ribbon flame-ribbon-right" />
      <span className="flame-ribbon flame-ribbon-bottom" />
      {embers.map((ember) => (
        <span key={ember} className={`ember ember-${ember}`} />
      ))}
    </div>
  );
}
