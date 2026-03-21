import React from 'react';

const Navbar = ({ onStart }) => {
  return (
    <nav className="flex justify-between items-center mb-12">
    <div className="bg-[#9f08b7] text-black px-4 py-1 font-black text-lg shadow-[0_0_15px_#00ff41]">
        FrontendIQ
    </div>

    <div className="flex gap-4 items-center">
        <button className="border border-white/20 px-4 py-2 text-white text-[10px] font-bold hover:bg-white hover:text-black transition-all">
        DOCUMENTATION
        </button>

        <button
        onClick={onStart}
        className="bg-cyan-400 text-black px-6 py-2 text-[10px] font-black hover:bg-white transition-all"
        >
        START_SCAN
        </button>
    </div>
    </nav>
  );
};

export default Navbar;