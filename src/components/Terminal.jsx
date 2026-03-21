import React, { useEffect, useRef } from 'react';

const Terminal = ({ logs }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  return (
    <div className="h-48 overflow-y-auto p-4 font-mono text-[11px] leading-tight space-y-1 scroll-smooth">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2">
          <span className="opacity-40">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
          <span className={log.includes('Done') ? 'text-white' : ''}>{log}</span>
        </div>
      ))}
      <div className="w-2 h-4 bg-[#00ff41] animate-pulse inline-block" />
    </div>
  );
};

export default Terminal;