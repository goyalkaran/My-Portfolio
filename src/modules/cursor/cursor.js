const { useEffect, useState } = require("react");
const { motion } = require("framer-motion");

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return motion.div(
    { className: "cursor", animate: { x: position.x, y: position.y} },
    ""
  );
};

module.exports = Cursor;