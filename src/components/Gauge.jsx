import React from 'react';

const Gauge = ({ score, label }) => {
  const radius = 40;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r={radius} stroke="#1a1a1a" strokeWidth="8" fill="none" />
          <circle 
            cx="48" cy="48" r={radius} stroke="#00ff41" strokeWidth="8" fill="none"
            strokeDasharray={circ} strokeDashoffset={offset} 
            className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_#00ff41]"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
          {score}
        </span>
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00ff41]">{label}</span>
    </div>
  );
};

export default Gauge;