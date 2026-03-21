import React, { useState } from 'react';
import { Terminal, Lightbulb, Zap, Copy, Check, Loader2 } from 'lucide-react';

const AITools = ({ onAIResult, aiResponse, isLoading }) => {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('fix'); // 'fix' or 'idea'
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!aiResponse) return;
    await navigator.clipboard.writeText(aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-panel p-6 space-y-5 border-t-4 border-t-[#562f9a] bg-[#0d0d14]/80 backdrop-blur-xl rounded-sm shadow-2xl">
      
      {/* TABS - Cyan for Active */}
      <div className="flex gap-6 border-b border-white/5 pb-4">
        <button 
          onClick={() => setActiveTab('fix')}
          className={`text-[11px] font-black uppercase flex items-center gap-2 transition-all duration-300 tracking-widest ${
            activeTab === 'fix' ? 'text-[#49b6c7] scale-105' : 'text-white/30 hover:text-white/60'
          }`}
        >
          <Terminal size={14}/> BUG_FIXER
        </button>
        <button 
          onClick={() => setActiveTab('idea')}
          className={`text-[11px] font-black uppercase flex items-center gap-2 transition-all duration-300 tracking-widest ${
            activeTab === 'idea' ? 'text-[#20d7f3] scale-105' : 'text-white/30 hover:text-white/60'
          }`}
        >
          <Lightbulb size={14}/> ARCHITECT
        </button>
      </div>

      {/* INPUT AREA - Deep Navy with Purple Focus */}
      <div className="relative">
        <textarea 
          className="w-full h-36 bg-black/40 border border-[#7c3aed]/20 p-4 text-[12px] font-mono text-[#e5e7eb] outline-none focus:border-[#22d3ee]/50 transition-all rounded-sm placeholder:text-white/10 resize-none"
          placeholder={activeTab === 'fix' ? "// PASTE_BROKEN_CODE_OR_ERROR_LOGS..." : "// DESCRIBE_YOUR_STARTUP_VISION..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="absolute bottom-3 right-3 opacity-20 text-[9px] font-bold text-[#7c3aed]">
          NEURAL_INPUT_V4
        </div>
      </div>

      {/* ACTION BUTTON - Yellow (CTA) */}
      <button 
        disabled={isLoading || !text}
        className={`w-full py-4 font-black text-[11px] uppercase flex items-center justify-center gap-3 transition-all duration-500 tracking-[0.2em] shadow-lg
          ${isLoading 
            ? 'bg-white/10 text-white/40 cursor-not-allowed' 
            : 'bg-[#facc15] text-black hover:bg-white hover:shadow-[0_0_25px_rgba(250,204,21,0.3)]'
          }`}
        onClick={() => onAIResult(activeTab, text)}
      >
        {isLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Zap size={16} fill="currentColor" />
        )}
        {isLoading ? "PROCESSING_NEURONS..." : activeTab === 'fix' ? "INITIATE_REPAIR" : "GENERATE_BLUEPRINT"}
      </button>

      {/* AI RESULT BOX - Glassmorphism style */}
      {aiResponse && (
        <div className="mt-6 relative group animate-in fade-in zoom-in-95 duration-500">
          <div className="absolute -top-3 left-4 bg-[#7c3aed] text-white text-[9px] px-2 py-0.5 font-bold uppercase tracking-tighter rounded-sm">
            AI_OUTPUT
          </div>
          
          <button 
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 bg-black/40 border border-white/5 text-[#22d3ee] hover:bg-[#7c3aed] hover:text-white transition-all rounded-sm z-10"
            title="Copy Results"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>

          <div className="bg-black/60 border border-[#7c3aed]/20 p-6 pt-8 font-mono text-[11px] text-[#22d3ee]/90 whitespace-pre-wrap max-h-80 overflow-y-auto leading-relaxed custom-scrollbar">
            {aiResponse}
          </div>
        </div>
      )}
    </div>
  );
};

export default AITools;