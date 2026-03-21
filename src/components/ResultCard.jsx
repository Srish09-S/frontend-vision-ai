import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ResultCard = ({ title, items, color }) => {
  const isRed = color === 'red';

  return (
    <div className={`cyber-panel p-6 border-l-4 ${isRed ? 'border-red-500' : 'border-[#00ff41]'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xs font-black uppercase tracking-widest ${isRed ? 'text-red-500' : 'text-[#00ff41]'}`}>
          {title}
        </h3>
        {isRed ? <AlertTriangle size={14} className="text-red-500" /> : <CheckCircle size={14} className="text-[#00ff41]" />}
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="group border-b border-white/5 pb-4 last:border-0">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-white group-hover:text-[#00ff41] transition-colors uppercase">
                {item.label}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed mb-3">
              {item.desc}
            </p>
            <a 
              href={item.link} 
              target="_blank" 
              className={`text-[9px] font-black uppercase tracking-tighter ${isRed ? 'text-red-400' : 'text-cyan-400'} hover:text-white transition-all`}
            >
              Learn_Module &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;