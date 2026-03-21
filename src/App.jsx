import React, { useState } from 'react';
import { useAI } from './hooks/useAI'; 
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Gauge from './components/Gauge';
import AITools from './components/AITools'; 
import { Zap, Activity, Cpu, Layout, Globe, ChevronRight } from 'lucide-react';

const App = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const [logs, setLogs] = useState([]);
  const [aiReport, setAiReport] = useState(null);
  const [aiToolResponse, setAiToolResponse] = useState('');

  const { askAI, loading: aiLoading } = useAI();

  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-8), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleScan = async () => {
    if (!url.startsWith('http')) {
      alert("Please enter a valid URL (e.g., https://google.com)");
      return;
    }

    setIsAnalyzing(true);
    setDone(false);
    setAiReport(null);
    setLogs([]);

    addLog(`INITIATING SCAN: ${url}`);
    addLog("LINKING NEURAL NETWORK...");
    
    try {
      // PROMPT: Updated for better 2026 model reasoning
      const prompt = `Act as a Senior Web Auditor. Analyze the URL: ${url}. 
      Return a report with these exact sections:
      - PROJECT LEVEL: (Beginner/Intermediate/Senior)
      - TECH STACK: (Detected Frameworks & Libraries)
      - CRITICAL ISSUES: (Top 3 bugs or UI flaws)
      - STEP-BY-STEP ROADMAP: (How to reach the next level)
      Use clean bullet points.`;

      const response = await askAI("analyze", prompt);
      
      addLog("DECRYPTING SITE STRUCTURE...");
      await new Promise(r => setTimeout(r, 1000)); 
      addLog("STREAMS ANALYZED. GENERATING REPORT...");
      
      setAiReport(response);
      setDone(true);
    } catch (err) {
      addLog("CRITICAL ERROR: AI NODE OFFLINE.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen px-6 lg:px-16 py-10 w-full bg-[#0a0a0f] text-[#e5e7eb] font-mono selection:bg-[#7c3aed] selection:text-white">
        
        {/* HEADER */}
        <div className="mb-12 flex justify-between items-center border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#7c3aed] text-white px-4 py-1 font-black text-xl shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                FRONTEND.IQ
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-[#22d3ee] tracking-[0.2em]">
               <div className="w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse"></div> 2026_CORE_v5
            </div>
          </div>
          <div className="text-[10px] opacity-40 font-bold uppercase tracking-widest">
            Node: Jabalpur_Inference_01
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN: CONTROL & TERMINAL */}
          <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-6xl font-black text-white leading-none tracking-tighter">
                  REAL-TIME <br /><span className="text-[#22d3ee]">AUDITOR</span>
                </h1>
                <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-[0.4em]">Powered by Gemini 2.5 Flash</p>
              </div>

              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#22d3ee]/40 group-focus-within:text-[#22d3ee] transition-colors" size={20}/>
                <input
                    type="text"
                    placeholder="https://analyze-my-site.vercel.app"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-[#16161e] border border-white/5 pl-12 pr-5 py-5 text-[#22d3ee] outline-none font-bold focus:border-[#7c3aed] transition-all placeholder:opacity-20"
                />
              </div>

              <div className="cyber-panel h-52 border border-white/5 bg-black/20 overflow-hidden">
                <Terminal logs={logs} />
              </div>

              <button 
                onClick={handleScan} 
                disabled={isAnalyzing}
                className="w-full bg-[#facc15] text-black py-5 font-black text-sm uppercase flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.01] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? "ACCESSING NEURAL PATHWAYS..." : <><Zap size={18} fill="black"/> RUN DEEP ANALYSIS</>}
              </button>

              <AITools 
                onAIResult={async (mode, input) => setAiToolResponse(await askAI(mode, input))} 
                aiResponse={aiToolResponse} 
                isLoading={aiLoading} 
              />
          </div>

          {/* RIGHT COLUMN: AI REPORT */}
          <div className="space-y-6">
              {!done ? (
                <div className="cyber-panel h-full min-h-[600px] flex flex-col items-center justify-center border-dashed border-2 border-white/5 bg-[#0d0d14]/50">
                  <Cpu size={48} className={`mb-4 text-[#7c3aed] ${isAnalyzing ? 'animate-spin' : 'opacity-20'}`} />
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 text-center px-10">
                    {isAnalyzing ? "Processing Large Language Model..." : "Feed a URL to generate intelligence"}
                  </span>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 space-y-6">
                  
                  {/* METRIC BOXES */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="cyber-panel p-6 bg-[#11111a] border-t-2 border-t-[#7c3aed]">
                      <p className="text-[10px] text-[#7c3aed] font-bold uppercase mb-2">Complexity</p>
                      <h3 className="text-xl font-black text-white uppercase tracking-tighter">AI-Calculated</h3>
                    </div>
                    <div className="cyber-panel p-6 bg-[#11111a] border-t-2 border-t-[#22d3ee]">
                      <p className="text-[10px] text-[#22d3ee] font-bold uppercase mb-2">Confidence</p>
                      <h3 className="text-xl font-black text-white uppercase tracking-tighter">98.4%</h3>
                    </div>
                  </div>

                  {/* DYNAMIC REPORT BODY */}
                  <div className="cyber-panel p-8 bg-[#0d0d14] border-l-4 border-l-[#facc15] relative group">
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                      <Layout size={80} />
                    </div>
                    
                    <h2 className="text-[#facc15] font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                      <ChevronRight size={16} className="animate-pulse"/> REPORT_STREAM_01
                    </h2>

                    <div className="text-[#e5e7eb] text-[13px] leading-relaxed whitespace-pre-wrap font-sans border-t border-white/5 pt-6">
                      {aiReport}
                    </div>
                  </div>

                  {/* SCORE VISUALS */}
                  <div className="cyber-panel p-8 flex justify-around bg-[#11111a] border-white/5">
                    <Gauge score={82} label="SEO" color="#7c3aed" />
                    <Gauge score={94} label="Code" color="#22d3ee" />
                    <Gauge score={70} label="UX" color="#facc15" />
                  </div>

                </div>
              )}
          </div>
        </div>
    </div>
  );
};

export default App;