// ========================================
// FILE: api/contact-card.js
// ========================================
export default function handler(req, res) {
  const platforms = [
    { name: 'Gmail', icon: '📧', color: '#ea4335', bg: 'rgba(234, 67, 53, 0.1)' },
    { name: 'Discord', icon: '💬', color: '#7289da', bg: 'rgba(114, 137, 218, 0.1)' },
    { name: 'LinkedIn', icon: '💼', color: '#0077b5', bg: 'rgba(0, 119, 181, 0.1)' },
    { name: 'GitHub', icon: '🐙', color: '#00d9ff', bg: 'rgba(0, 217, 255, 0.1)' }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="250" viewBox="0 0 700 250">
      <defs>
        <linearGradient id="contactBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e"/>
          <stop offset="50%" style="stop-color:#16213e"/>
          <stop offset="100%" style="stop-color:#1a1a2e"/>
        </linearGradient>
        <filter id="platformGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <style>
        .contact-bg { fill: url(#contactBg); filter: url(#platformGlow); }
        .main-title { 
          fill: #00d9ff; 
          font-family: 'Courier New', monospace; 
          font-size: 26px; 
          font-weight: bold; 
        }
        .sub-title { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 18px; 
        }
        .platform-card {
          animation: cardHover 4s ease-in-out infinite;
          cursor: pointer;
        }
        .platform-text { 
          fill: #58a6ff; 
          font-family: 'Courier New', monospace; 
          font-size: 16px; 
          font-weight: bold;
        }
        .platform-icon { font-size: 20px; }
        .connect-line {
          stroke: #00d9ff;
          stroke-width: 2;
          stroke-dasharray: 10,5;
          animation: dashMove 3s linear infinite;
        }
        
        @keyframes cardHover {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -15; }
        }
      </style>
      
      <rect class="contact-bg" x="15" y="15" width="670" height="220" rx="20"/>
      
      <!-- Header -->
      <text x="350" y="50" text-anchor="middle" class="main-title">🚀 Let's Connect!</text>
      <text x="350" y="75" text-anchor="middle" class="sub-title">Let's build something amazing together!</text>
      
      <!-- Connecting lines -->
      <line class="connect-line" x1="80" y1="90" x2="620" y2="90"/>
      
      <!-- Platform cards -->
      ${platforms.map((platform, i) => {
        const x = 70 + i * 145;
        return `
          <g class="platform-card" style="animation-delay: ${i * 0.5}s;">
            <!-- Card background -->
            <rect x="${x}" y="110" width="130" height="80" fill="${platform.bg}" 
                  stroke="${platform.color}" stroke-width="2" rx="12"/>
            
            <!-- Platform icon -->
            <text x="${x + 65}" y="140" text-anchor="middle" class="platform-icon">${platform.icon}</text>
            
            <!-- Platform name -->
            <text x="${x + 65}" y="165" text-anchor="middle" class="platform-text">${platform.name}</text>
            
            <!-- Subtle glow effect -->
            <rect x="${x}" y="110" width="130" height="80" fill="none" 
                  stroke="${platform.color}" stroke-width="1" rx="12" opacity="0.3"/>
          </g>
        `;
      }).join('')}
      
      <!-- Footer decoration -->
      <rect x="50" y="210" width="600" height="3" fill="#00d9ff" opacity="0.4" rx="1"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
