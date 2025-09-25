
export default function handler(req, res) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="350" viewBox="0 0 800 350">
      <defs>
        <linearGradient id="aboutBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1117"/>
          <stop offset="30%" style="stop-color:#161b22"/>
          <stop offset="70%" style="stop-color:#21262d"/>
          <stop offset="100%" style="stop-color:#0d1117"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="50%" style="stop-color:#ff6b6b"/>
          <stop offset="100%" style="stop-color:#00d9ff"/>
        </linearGradient>
        <filter id="textGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <style>
        .about-bg { fill: url(#aboutBg); stroke: url(#accentGrad); stroke-width: 3; }
        .card-title { 
          fill: #00d9ff; 
          font-family: 'Courier New', monospace; 
          font-size: 24px; 
          font-weight: bold;
          filter: url(#textGlow);
        }
        .info-text { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 16px; 
        }
        .highlight { fill: #00d9ff; font-weight: bold; }
        .emoji { font-size: 18px; }
        .pulse-dot { 
          fill: #ff6b6b; 
          animation: pulseDot 2.5s infinite;
        }
        .quote-text {
          fill: #58a6ff;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-style: italic;
        }
        .corner-decoration {
          fill: none;
          stroke: #ff6b6b;
          stroke-width: 2;
          opacity: 0.6;
          animation: cornerPulse 4s ease-in-out infinite;
        }
        
        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; r: 4; }
          50% { opacity: 1; r: 6; }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      </style>
      
      <rect class="about-bg" x="15" y="15" width="770" height="320" rx="20"/>
      
      <!-- Header section -->
      <rect x="30" y="30" width="740" height="5" fill="url(#accentGrad)" rx="2"/>
      <text x="400" y="65" text-anchor="middle" class="card-title">👨‍💻 About Me</text>
      
      <!-- Content sections -->
      <text x="50" y="110" class="info-text">
        <tspan class="emoji">🎓</tspan> <tspan class="highlight">Computer Science Student</tspan> passionate about web development
      </text>
      
      <text x="50" y="140" class="info-text">
        <tspan class="emoji">🚀</tspan> <tspan class="highlight">Self-learner & Solo Coder</tspan> improving JavaScript skills daily
      </text>
      
      <text x="50" y="170" class="info-text">
        <tspan class="emoji">🎨</tspan> <tspan class="highlight">Creative Mind:</tspan> Painting, drawing, and creative coding
      </text>
      
      <text x="50" y="200" class="info-text">
        <tspan class="emoji">🌅</tspan> <tspan class="highlight">Early bird programmer</tspan> with hydration-powered sessions
      </text>
      
      <text x="50" y="230" class="info-text">
        <tspan class="emoji">💡</tspan> <tspan class="highlight">Goal:</tspan> Building amazing web experiences
      </text>
      
      <text x="50" y="260" class="info-text">
        <tspan class="emoji">🔥</tspan> Love experimenting with new technologies
      </text>
      
      <!-- Side decorations -->
      <circle class="pulse-dot" cx="720" cy="110" r="4" style="animation-delay: 0s;"/>
      <circle class="pulse-dot" cx="720" cy="140" r="4" style="animation-delay: 0.5s;"/>
      <circle class="pulse-dot" cx="720" cy="170" r="4" style="animation-delay: 1s;"/>
      <circle class="pulse-dot" cx="720" cy="200" r="4" style="animation-delay: 1.5s;"/>
      
      <!-- Quote section -->
      <rect x="30" y="285" width="740" height="2" fill="rgba(0, 217, 255, 0.3)"/>
      <text x="400" y="310" text-anchor="middle" class="quote-text">
        ⚡ "Always curious. Always learning. Always creating." ⚡
      </text>
      
      <!-- Corner decorations -->
      <path class="corner-decoration" d="M 35 35 L 45 35 L 45 45"/>
      <path class="corner-decoration" d="M 755 35 L 765 35 L 765 45"/>
      <path class="corner-decoration" d="M 35 315 L 45 315 L 45 305"/>
      <path class="corner-decoration" d="M 755 315 L 765 315 L 765 305"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
