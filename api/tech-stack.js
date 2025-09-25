// ========================================
// FILE: api/tech-stack.js
// ========================================
export default function handler(req, res) {
  const technologies = [
    { name: 'JavaScript', color: '#f7df1e', level: 85, icon: '🟨' },
    { name: 'TypeScript', color: '#3178c6', level: 75, icon: '🔷' },
    { name: 'React', color: '#61dafb', level: 80, icon: '⚛️' },
    { name: 'HTML/CSS', color: '#e34c26', level: 90, icon: '🎨' },
    { name: 'Node.js', color: '#339933', level: 70, icon: '🟢' },
    { name: 'Git', color: '#f05032', level: 85, icon: '📚' },
    { name: 'MongoDB', color: '#47a248', level: 65, icon: '🍃' },
    { name: 'PostgreSQL', color: '#336791', level: 60, icon: '🐘' }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="techBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1117"/>
          <stop offset="50%" style="stop-color:#161b22"/>
          <stop offset="100%" style="stop-color:#21262d"/>
        </linearGradient>
        <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="100%" style="stop-color:#ff6b6b"/>
        </linearGradient>
        <filter id="barGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <style>
        .tech-bg { fill: url(#techBg); stroke: #00d9ff; stroke-width: 3; }
        .section-title { 
          fill: url(#titleGrad); 
          font-family: 'Courier New', monospace; 
          font-size: 28px; 
          font-weight: bold;
          text-anchor: middle;
        }
        .tech-name { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 16px; 
          font-weight: bold;
        }
        .tech-icon {
          font-size: 18px;
        }
        .skill-track { fill: #30363d; }
        .skill-fill { 
          filter: url(#barGlow);
          animation: skillFill 3s ease-out;
        }
        .percentage { 
          fill: #58a6ff; 
          font-family: 'Courier New', monospace; 
          font-size: 14px; 
          font-weight: bold;
        }
        .divider {
          stroke: rgba(0, 217, 255, 0.3);
          stroke-width: 1;
          stroke-dasharray: 5,5;
        }
        
        @keyframes skillFill {
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: var(--final-width); opacity: 1; }
        }
      </style>
      
      <rect class="tech-bg" x="15" y="15" width="770" height="470" rx="20"/>
      
      <!-- Header -->
      <rect x="30" y="30" width="740" height="4" fill="url(#titleGrad)" rx="2"/>
      <text x="400" y="70" class="section-title">🚀 Tech Stack & Skills</text>
      <line class="divider" x1="50" y1="85" x2="750" y2="85"/>
      
      ${technologies.map((tech, i) => {
        const y = 120 + i * 45;
        const barWidth = (tech.level / 100) * 400;
        return `
          <!-- ${tech.name} -->
          <text x="60" y="${y}" class="tech-icon">${tech.icon}</text>
          <text x="90" y="${y}" class="tech-name">${tech.name}</text>
          
          <!-- Skill bar background -->
          <rect x="250" y="${y - 15}" width="400" height="24" class="skill-track" rx="12"/>
          
          <!-- Skill bar fill -->
          <rect x="250" y="${y - 15}" width="${barWidth}" height="24" 
                fill="${tech.color}" class="skill-fill" rx="12"
                style="--final-width: ${barWidth}px;">
            <animate attributeName="width" from="0" to="${barWidth}" dur="2.5s" begin="${i * 0.2}s"/>
          </rect>
          
          <!-- Percentage -->
          <text x="670" y="${y}" class="percentage">${tech.level}%</text>
          
          <!-- Subtle separator -->
          ${i < technologies.length - 1 ? `<line x1="60" y1="${y + 20}" x2="740" y2="${y + 20}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>` : ''}
        `;
      }).join('')}
      
      <!-- Footer accent -->
      <rect x="30" y="450" width="740" height="4" fill="url(#titleGrad)" rx="2"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
