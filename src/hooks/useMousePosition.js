import { useState, useEffect } from "react";

export default function useMousePosition(ref) {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.offsetX, y: ev.offsetY });
  };


  useEffect(() => {
    ref.current?.addEventListener('mousemove', updateMousePosition);
    return () => ref.current?.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};
