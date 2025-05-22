const DottedPattern = () => {
  // Générer la grille de points
  const generateDots = () => {
    const dots = [];
    const spacing = 12; // Espacement entre les points
    const dotSize = 2; // Taille des points
    const rows = Math.floor(511 / spacing);
    const cols = Math.floor(532 / spacing);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push(
          <div
            key={`${row}-${col}`}
            className="absolute bg-faded-base rounded-full"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              left: `${col * spacing + 6}px`,
              top: `${row * spacing + 6}px`,
            }}
          />,
        );
      }
    }
    return dots;
  };

  return (
    <div
      className="absolute bg-transparent"
      style={{
        width: "532px",
        height: "511px",
        position: "absolute",
        bottom: "-60%",
        right: "-86%",
        zIndex: -1,
        maskImage: `url("data:image/svg+xml,%3Csvg width='532' height='511' viewBox='0 0 532 511' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M266 0l266 266H266zM0 245l266 266V245zM266 245h266v266H266z' fill='black'/%3E%3C/svg%3E")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='532' height='511' viewBox='0 0 532 511' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M266 0l266 266H266zM0 245l266 266V245zM266 245h266v266H266z' fill='black'/%3E%3C/svg%3E")`,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        opacity: 0.5,
      }}
    >
      {generateDots()}

      {/* Dégradé d'opacité de bas droite à haut gauche */}
      <div
        className="absolute"
        style={{
          width: "532px",
          height: "511px",
          top: 0,
          left: 0,
          background:
            "linear-gradient(315deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default DottedPattern;
