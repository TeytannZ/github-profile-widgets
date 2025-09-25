
export default function handler(req, res) {
  const { 
    text = "Hi there! I'm Teytann", 
    subtitle = "✨ Self-learner | Solo Coder | Creative Mind ✨" 
  } = req.query;
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="250" viewBox="0 0 900 250">
      <defs>
        <linearGradient id="headerBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="30%" style="stop-color:#1a1a2e"/>
          <stop offset="70%" style="stop-color:#16213e"/>
          <stop offset="100%" style="stop-color:#0a0a0a"/>
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="50%" style="stop-color:#ff6b6b"/>
          <stop offset="100%" style="stop-color:#00d9ff"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="textShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00d9ff" flood-opacity="0.8"/>
        </filter>
      </defs>
      
      <style>
        .header-bg { fill: url(#headerBg); }
        .main-title { 
          fill: url(#textGrad); 
          font-family: 'Courier New', monospace; 
          font-size: 48px; 
          font-weight: bold;
          filter: url(#textShadow);
          animation: titlePulse 4s ease-in-out infinite;
        }
        .sub-title { 
          fill: #00d9ff; 
          font-family: 'Courier New', monospace; 
          font-size: 18px;
          opacity: 0.9;
          animation: subtitleFloat 3s ease-in-out infinite;
        }
        .particle { 
          fill: #00d9ff; 
          filter: url(#glow);
          animation: particleFloat 6s ease-in-out infinite;
        }
        .wave-element {
          fill: rgba(0, 217, 255, 0.15);
          animation: waveMotion 8s ease-in-out infinite;
        }
        .deco-line {
          stroke: #00d9ff;
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          animation: lineGlow 3s ease-in-out infinite;
        }
        
        @keyframes titlePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        @keyframes subtitleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          33% { transform: translateY(-15px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(-5px) rotate(240deg); opacity: 0.8; }
        }
        @keyframes waveMotion {
          0%, 100% { transform: translateX(0px); opacity: 0.15; }
          50% { transform: translateX(-20px); opacity: 0.25; }
        }
        @keyframes lineGlow {
          0%, 100% { opacity: 0.6; stroke-width: 3; }
          50% { opacity: 1; stroke-width: 4; }
        }
      </style>
      
      <rect class="header-bg" width="100%" height="100%" rx="20"/>
      
      <!-- Decorative wave elements -->
      <path class="wave-element" d="M0,180 Q225,150 450,170 T900,160 L900,250 L0,250 Z"/>
      <path class="wave-element" d="M0,200 Q225,170 450,190 T900,180 L900,250 L0,250 Z" style="animation-delay: -2s; opacity: 0.1;"/>
      
      <!-- Floating particles -->
      <circle class="particle" cx="120" cy="60" r="3" style="animation-delay: 0s;"/>
      <circle class="particle" cx="780" cy="80" r="2.5" style="animation-delay: -1s;"/>
      <circle class="particle" cx="320" cy="45" r="2" style="animation-delay: -2s;"/>
      <circle class="particle" cx="680" cy="65" r="3.5" style="animation-delay: -0.5s;"/>
      <circle class="particle" cx="200" cy="90" r="1.5" style="animation-delay: -1.5s;"/>
      <circle class="particle" cx="820" cy="50" r="2" style="animation-delay: -2.5s;"/>
      
      <!-- Main content -->
      <text x="450" y="100" text-anchor="middle" class="main-title">${text}</text>
      <text x="450" y="140" text-anchor="middle" class="sub-title">${subtitle}</text>
      
      <!-- Decorative lines -->
      <line class="deco-line" x1="80" y1="170" x2="180" y2="170"/>
      <line class="deco-line" x1="720" y1="170" x2="820" y2="170" style="animation-delay: -1s;"/>
      
      <!-- Corner decorations -->
      <circle cx="50" cy="50" r="8" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.7"/>
      <circle cx="850" cy="200" r="8" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.7"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
