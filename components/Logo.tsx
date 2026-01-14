
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  const [error, setError] = useState(false);

  // If the image fails to load, we show a premium CSS fallback
  // that mimics the overlapping translucent sticky notes design.
  return (
    <div className={`${className} relative flex items-center justify-center pointer-events-none select-none`}>
      {!error ? (
        <img 
          src="Logo.png" 
          alt="Ghosts Notes Logo" 
          className="w-full h-full object-contain block relative z-20"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full relative">
          {/* Bottom Note Fallback */}
          <div className="absolute w-[80%] h-[80%] bg-[#8B7EFF]/20 backdrop-blur-md rounded-lg border border-white/20 shadow-sm rotate-[12deg] translate-x-1 translate-y-1 flex items-end justify-end p-1">
             <div className="w-1/3 h-1/3 border-b-2 border-r-2 border-white/40 rounded-br-sm" />
          </div>
          {/* Top Note Fallback */}
          <div className="absolute w-[80%] h-[80%] bg-white/30 backdrop-blur-md rounded-lg border border-white/40 shadow-md -rotate-[8deg] -translate-x-1 -translate-y-1 flex items-center justify-center">
             <div className="w-1/2 h-1/2 border-2 border-white/50 rounded-full flex items-center justify-center">
               <div className="w-1 h-1 bg-white/50 rounded-full" />
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
