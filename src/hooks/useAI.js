import { useState } from 'react';

export const useAI = () => {
  const [loading, setLoading] = useState(false);

  const askAI = async (mode, urlInput) => {
    setLoading(true);
    
    // 1. Simulate "Neural Processing" delay
    await new Promise(resolve => setTimeout(resolve, 1800));

    const url = urlInput.toLowerCase();
    
    // 2. DETECTION LOGIC (Heuristics)
    let data = {
      level: "INTERMEDIATE",
      stack: "React, Vite, Tailwind CSS",
      issues: "• High LCP due to unoptimized assets.\n• Missing Meta Description tags.\n• Slow hydration on mobile devices.",
      roadmap: "1. Implement Lazy Loading.\n2. Add SEO Meta Tags.\n3. Minify CSS/JS bundles."
    };

    // Specific Detection for PORTFOLIO links
    if (url.includes('portfolio') || url.includes('cv') || url.includes('navy')) {
      data.level = "BEGINNER+";
      data.stack = "React, Framer Motion, Vercel, Lucide";
      data.issues = "• Animation frame-rate drops on low-end devices.\n• Lack of 'alt' text on project gallery images.\n• External links missing 'rel=noopener' security.";
      data.roadmap = "1. Optimize animations for 60fps.\n2. Add Accessibility (Aria) labels.\n3. Integrate a Contact form backend.";
    } 
    
    // Specific Detection for TAX / FINANCE / ADMIN links
    else if (url.includes('tax') || url.includes('assist') || url.includes('admin') || url.includes('finance')) {
      data.level = "SENIOR";
      data.stack = "Next.js, TypeScript, Supabase, Chart.js";
      data.issues = "• Unsecured client-side data fetching detected.\n• Redundant re-renders in data table components.\n• CSS-in-JS overhead slowing down first paint.";
      data.roadmap = "1. Migrate to Server Components.\n2. Implement React Query for caching.\n3. Add Zod for schema validation.";
    }

    // 3. Construct the response string your App.jsx expects
    const finalReport = `
[PROJECT LEVEL]: ${data.level}

[TECH STACK]: ${data.stack}

[CRITICAL ISSUES]:
${data.issues}

[STEP-BY-STEP ROADMAP]:
${data.roadmap}
    `.trim();

    setLoading(false);
    return finalReport;
  };

  return { askAI, loading };
};