import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
  href?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "", 
  onClick, 
  primary = false,
  href 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // If href is provided, render as motion.a, otherwise motion.button
  const MotionComponent = href ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
    >
      <MotionComponent
        href={href}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        onClick={onClick}
        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          primary 
            ? "bg-[#8B7EFF] text-white hover:shadow-[0_0_20px_rgba(139,126,255,0.4)]" 
            : "border border-current hover:bg-[#8B7EFF] hover:text-white hover:border-[#8B7EFF]"
        }`}
      >
        {children}
      </MotionComponent>
    </div>
  );
};

export default MagneticButton;