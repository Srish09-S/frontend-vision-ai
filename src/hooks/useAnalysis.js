import { useState } from 'react';

export const useAnalysis = (askAI) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const [realData, setRealData] = useState(null);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const startScan = async (url) => {
    setIsAnalyzing(true);
    setDone(false);
    setLogs([]);

    addLog(`INITIATING CONNECTION TO: ${url}`);
    addLog("BYPASSING FIREWALLS...");
    
    try {
      // 1. Ask AI to analyze the "likely" state of this URL
      const analysisPrompt = `Analyze this website URL: ${url}. 
      1. Detect the Tech Stack (e.g., React, Tailwind, HTML/CSS).
      2. Determine Project Level (Beginner, Intermediate, Senior).
      3. Identify 3 specific UI/UX errors.
      4. Suggest a 3-step Roadmap.
      Return the data in a clean format.`;

      const aiResult = await askAI("analyze", analysisPrompt);
      
      addLog("NEURAL ENGINE ACTIVE...");
      addLog("TECH STACK IDENTIFIED...");
      
      // Simulate a small delay for the "Hacker" feel
      await new Promise(res => setTimeout(res, 2000));
      
      setRealData(aiResult); 
      setDone(true);
      addLog("ANALYSIS COMPLETE. REPORT GENERATED.");
    } catch (err) {
      addLog("ERROR: SCAN INTERRUPTED.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return { isAnalyzing, logs, done, startScan, realData };
};