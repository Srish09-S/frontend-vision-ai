export const analysisResults = {
  errors: [
    { label: "No HTTPS Security", desc: "Your website is not using HTTPS, making it unsafe for users.", link: "https://developer.mozilla.org/en-US/docs/Web/Security" },
    { label: "Slow Load Time", desc: "Website takes too long to load, users may leave early.", link: "https://web.dev/performance/" },
    { label: "Mobile Not Responsive", desc: "Layout breaks on smaller screens.", link: "https://web.dev/responsive-web-design-basics/" },
    { label: "Missing Alt Text", desc: "Images are not accessible for screen readers.", link: "https://www.w3.org/WAI/" },
    { label: "Console Errors", desc: "JavaScript errors detected in browser console.", link: "https://developer.chrome.com/docs/devtools/console/" }
  ],
  enhancements: [
    { label: "Add Animations", desc: "Use smooth animations to improve user experience.", link: "https://www.framer.com/motion/" },
    { label: "Improve UI Contrast", desc: "Text and background contrast can be improved.", link: "https://webaim.org/resources/contrastchecker/" },
    { label: "Use Better Fonts", desc: "Typography can improve readability and design.", link: "https://fonts.google.com/" },
    { label: "Optimize Images", desc: "Reduce image sizes for faster loading.", link: "https://web.dev/fast/" }
  ],
  skills: [
    { label: "Responsive Design", desc: "Learn to build layouts that work on all screen sizes.", link: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
    { label: "Accessibility (A11y)", desc: "Make websites usable for all users.", link: "https://www.w3.org/WAI/fundamentals/" },
    { label: "Performance Optimization", desc: "Learn lazy loading, caching, and code splitting.", link: "https://web.dev/fast/" },
    { label: "Animations & UX", desc: "Improve user engagement with motion design.", link: "https://www.framer.com/motion/" }
  ],
  guidance: [
    { label: "Start with Basics", desc: "Fix layout, responsiveness, and loading speed first.", link: "#" },
    { label: "Improve UI Design", desc: "Focus on spacing, colors, and typography.", link: "#" },
    { label: "Test Your Website", desc: "Use tools like Lighthouse to measure performance.", link: "https://developers.google.com/web/tools/lighthouse" },
    { label: "Deploy & Iterate", desc: "Keep improving based on feedback and testing.", link: "#" }
  ]
};