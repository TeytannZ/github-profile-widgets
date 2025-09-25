
export default function handler(req, res) {
  const stats = [
    { emoji: '📅', label: 'Coding Since', value: '2023' },
    { emoji: '☕', label: 'Cups of Water/Day', value: '8+' },
    { emoji: '🌅', label: 'Wake Up Time', value: '6:00 AM' },
    { emoji: '🎨', label: 'Creative Projects', value: '∞' }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="200" viewBox="0 0 600 200">
      <defs>
        <linearGradient id="funBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#161b22"/>
          <stop offset="100%" style="stop-color:#0d1117"/>
        </linearGradient>
      </defs>
      
      <style>
        .fun-bg { fill: url(#funBg); stroke: #ff6b6b; stroke-width: 2; }
        .fun-title { 
          fill: #ff6b6b; 
          font-family: 'Courier New', monospace; 
          font-size: 22px; 
          font-weight: bold; 
        }
        .stat-emoji { font-size: 24px; }
        .stat-value { 
          fill: #00d9ff; 
          font-family: 'Courier New', monospace; 
          font-size: 18px; 
          font-weight: bold;
        }
        .stat-label { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 12px;
        }
        .stat-box {
          animation: statFloat 3s ease-in-out infinite;
        }
        
        @keyframes statFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
      </style>
      
      <rect class="fun-bg" x="10" y="10" width="580" height="180" rx="15"/>
      
      <!-- Title -->
      <text x="300" y="35" text-anchor="middle" class="fun-title">🎮 Fun Stats</text>
      
      <!-- Stats -->
      ${stats.map((stat, i) => {
        const x = 50 + i * 135;
        return `
          <g class="stat-box" style="animation-delay: ${i * 0.3}s;">
            <rect x="${x}" y="60" width="120" height="100" fill="rgba(255, 107, 107, 0.05)" 
                  stroke="rgba(255, 107, 107, 0.3)" stroke-width="1" rx="10"/>
            <text x="${x + 60}" y="85" text-anchor="middle" class="stat-emoji">${stat.emoji}</text>
            <text x="${x + 60}" y="110" text-anchor="middle" class="stat-value">${stat.value}</text>
            <text x="${x + 60}" y="130" text-anchor="middle" class="stat-label">${stat.label}</text>
          </g>
        `;
      }).join('')}
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
