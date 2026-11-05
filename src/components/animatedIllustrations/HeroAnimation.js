import React from "react";
import "./Animations.scss";

export default function HeroAnimation({isDark}) {
  const windowBg = isDark ? "#0f172a" : "#1e293b";
  const windowBorder = isDark ? "#334155" : "#475569";
  const glowColor = isDark ? "#6366f1" : "#4f46e5";

  return (
    <div className="animated-svg-container">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fullstack Developer Workspace"
      >
        <defs>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="20"
              floodColor="#000000"
              floodOpacity="0.25"
            />
          </filter>

          <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="laravelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2d20" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          <linearGradient id="dockerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0db7ed" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.22" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Pulsing Glow */}
        <circle
          cx="300"
          cy="260"
          r="220"
          fill="url(#ambientGlow)"
          className="anim-glow"
        />

        {/* Decorative Grid Lines */}
        <path
          d="M60 250 H540 M300 60 V460"
          stroke={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Dynamic Data Flow Cables */}
        <path
          d="M120 120 C 180 200, 200 240, 240 250"
          stroke="url(#cyanGrad)"
          strokeWidth="2.5"
          className="anim-dash"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M480 120 C 420 200, 400 240, 360 250"
          stroke="url(#laravelGrad)"
          strokeWidth="2.5"
          className="anim-dash-fast"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M110 400 C 160 360, 200 340, 250 330"
          stroke="url(#dockerGrad)"
          strokeWidth="2"
          className="anim-dash"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M490 400 C 440 360, 400 340, 350 330"
          stroke="url(#primaryGrad)"
          strokeWidth="2"
          className="anim-dash-fast"
          fill="none"
          opacity="0.7"
        />

        {/* Main Terminal Window */}
        <g filter="url(#heroShadow)">
          {/* Terminal Box */}
          <rect
            x="110"
            y="110"
            width="380"
            height="270"
            rx="14"
            fill={windowBg}
            stroke={windowBorder}
            strokeWidth="1.5"
          />

          {/* Window Header */}
          <rect
            x="110"
            y="110"
            width="380"
            height="38"
            rx="14"
            fill={isDark ? "#1e293b" : "#0f172a"}
          />
          <rect
            x="110"
            y="134"
            width="380"
            height="14"
            fill={isDark ? "#1e293b" : "#0f172a"}
          />

          {/* Window Control Dots */}
          <circle cx="132" cy="129" r="5" fill="#ef4444" />
          <circle cx="148" cy="129" r="5" fill="#f59e0b" />
          <circle cx="164" cy="129" r="5" fill="#10b981" />

          {/* Active File Tab */}
          <rect
            x="190"
            y="118"
            width="140"
            height="22"
            rx="4"
            fill={windowBg}
          />
          <circle cx="204" cy="129" r="3.5" fill="#38bdf8" />
          <text
            x="214"
            y="133"
            fill="#94a3b8"
            fontSize="10.5"
            fontFamily="monospace"
            fontWeight="600"
          >
            KienDeveloper.ts
          </text>

          {/* Code Lines with Syntax Colors */}
          {/* Line 1: Comment */}
          <text
            x="135"
            y="174"
            fill="#64748b"
            fontSize="11"
            fontFamily="monospace"
            fontStyle="italic"
          >
            {"// 🚀 Fullstack & DevOps Engineer (2+ Yrs)"}
          </text>

          {/* Line 2 */}
          <text x="135" y="196" fontSize="11" fontFamily="monospace">
            <tspan fill="#f43f5e">const</tspan>
            <tspan fill="#e2e8f0"> kien = </tspan>
            <tspan fill="#38bdf8">new</tspan>
            <tspan fill="#fbbf24"> Developer</tspan>
            <tspan fill="#e2e8f0">({'{'}</tspan>
          </text>

          {/* Line 3 */}
          <text x="150" y="218" fontSize="11" fontFamily="monospace">
            <tspan fill="#94a3b8">frontend: </tspan>
            <tspan fill="#a7f3d0">["Vue 3", "React", "Tailwind"]</tspan>
            <tspan fill="#e2e8f0">,</tspan>
          </text>

          {/* Line 4 */}
          <text x="150" y="240" fontSize="11" fontFamily="monospace">
            <tspan fill="#94a3b8">backend: </tspan>
            <tspan fill="#fed7aa">["PHP", "Laravel", "NodeJS"]</tspan>
            <tspan fill="#e2e8f0">,</tspan>
          </text>

          {/* Line 5 */}
          <text x="150" y="262" fontSize="11" fontFamily="monospace">
            <tspan fill="#94a3b8">devops: </tspan>
            <tspan fill="#bae6fd">["Docker", "Nginx", "Redis"]</tspan>
            <tspan fill="#e2e8f0">,</tspan>
          </text>

          {/* Line 6 */}
          <text x="150" y="284" fontSize="11" fontFamily="monospace">
            <tspan fill="#94a3b8">architecture: </tspan>
            <tspan fill="#fbcfe8">"Clean &amp; High-Performance"</tspan>
          </text>

          {/* Line 7 */}
          <text
            x="135"
            y="306"
            fill="#e2e8f0"
            fontSize="11"
            fontFamily="monospace"
          >
            {'}'});
          </text>

          {/* Line 8 */}
          <text x="135" y="330" fontSize="11.5" fontFamily="monospace">
            <tspan fill="#f43f5e">await</tspan>
            <tspan fill="#e2e8f0"> kien.</tspan>
            <tspan fill="#38bdf8">deployProduction</tspan>
            <tspan fill="#e2e8f0">();</tspan>
          </text>

          {/* Line 9: Prompt & Blinking Cursor */}
          <text x="135" y="356" fontSize="11.5" fontFamily="monospace">
            <tspan fill="#10b981">✓ Status: </tspan>
            <tspan fill="#4ade80" fontWeight="bold">
              Production Ready
            </tspan>
          </text>
          <rect
            x="300"
            y="346"
            width="7"
            height="13"
            fill="#38bdf8"
            className="anim-cursor"
          />
        </g>

        {/* FLOATING TECH BADGES */}

        {/* 1. React / Vue Orb (Top Left) */}
        <g className="anim-float-1">
          <g filter="url(#heroShadow)">
            <rect
              x="50"
              y="60"
              width="100"
              height="70"
              rx="12"
              fill={isDark ? "#1e293b" : "#ffffff"}
              stroke="url(#cyanGrad)"
              strokeWidth="2"
            />
            {/* Vue / React combined icon */}
            <circle cx="80" cy="95" r="14" fill="rgba(6, 182, 212, 0.15)" />
            <path
              d="M74 90 L80 102 L86 90 H82 L80 96 L78 90 Z"
              fill="#06b6d4"
            />
            <text
              x="102"
              y="93"
              fill={isDark ? "#f8fafc" : "#1e293b"}
              fontSize="12"
              fontWeight="bold"
            >
              Vue 3
            </text>
            <text x="102" y="105" fill="#38bdf8" fontSize="9" fontWeight="600">
              &amp; React
            </text>
          </g>
        </g>

        {/* 2. Laravel / PHP Orb (Top Right) */}
        <g className="anim-float-2">
          <g filter="url(#heroShadow)">
            <rect
              x="440"
              y="55"
              width="110"
              height="70"
              rx="12"
              fill={isDark ? "#1e293b" : "#ffffff"}
              stroke="url(#laravelGrad)"
              strokeWidth="2"
            />
            <circle cx="472" cy="90" r="14" fill="rgba(239, 68, 68, 0.15)" />
            <path
              d="M466 84 L472 90 L478 84 L472 98 Z"
              fill="#ef4444"
              stroke="#ef4444"
              strokeWidth="1"
            />
            <text
              x="494"
              y="88"
              fill={isDark ? "#f8fafc" : "#1e293b"}
              fontSize="12"
              fontWeight="bold"
            >
              Laravel
            </text>
            <text x="494" y="100" fill="#f87171" fontSize="9" fontWeight="600">
              &amp; PHP API
            </text>
          </g>
        </g>

        {/* 3. Docker Container (Bottom Left) */}
        <g className="anim-float-3">
          <g filter="url(#heroShadow)">
            <rect
              x="40"
              y="370"
              width="115"
              height="65"
              rx="12"
              fill={isDark ? "#1e293b" : "#ffffff"}
              stroke="url(#dockerGrad)"
              strokeWidth="2"
            />
            <circle cx="68" cy="402" r="14" fill="rgba(13, 183, 237, 0.15)" />
            <rect x="62" y="396" width="4" height="4" rx="0.5" fill="#0db7ed" />
            <rect x="67" y="396" width="4" height="4" rx="0.5" fill="#0db7ed" />
            <rect x="72" y="396" width="4" height="4" rx="0.5" fill="#0db7ed" />
            <rect x="67" y="391" width="4" height="4" rx="0.5" fill="#0db7ed" />
            <text
              x="90"
              y="400"
              fill={isDark ? "#f8fafc" : "#1e293b"}
              fontSize="12"
              fontWeight="bold"
            >
              Docker
            </text>
            <text x="90" y="412" fill="#0284c7" fontSize="9" fontWeight="600">
              CI/CD &amp; Nginx
            </text>
          </g>
        </g>

        {/* 4. Redis & MySQL (Bottom Right) */}
        <g className="anim-float-1">
          <g filter="url(#heroShadow)">
            <rect
              x="445"
              y="365"
              width="115"
              height="65"
              rx="12"
              fill={isDark ? "#1e293b" : "#ffffff"}
              stroke="url(#primaryGrad)"
              strokeWidth="2"
            />
            <circle cx="475" cy="397" r="14" fill="rgba(99, 102, 241, 0.15)" />
            {/* Database cylinders */}
            <ellipse
              cx="475"
              cy="392"
              rx="6"
              ry="2.5"
              fill="#6366f1"
              opacity="0.9"
            />
            <path
              d="M469 392 V 398 C 469 400, 481 400, 481 398 V 392"
              fill="#6366f1"
            />
            <ellipse
              cx="475"
              cy="398"
              rx="6"
              ry="2.5"
              fill="#8b5cf6"
              opacity="0.9"
            />
            <path
              d="M469 398 V 404 C 469 406, 481 406, 481 404 V 398"
              fill="#8b5cf6"
            />
            <text
              x="496"
              y="395"
              fill={isDark ? "#f8fafc" : "#1e293b"}
              fontSize="12"
              fontWeight="bold"
            >
              MySQL
            </text>
            <text x="496" y="407" fill="#818cf8" fontSize="9" fontWeight="600">
              &amp; Redis Cache
            </text>
          </g>
        </g>

        {/* Decorative Floating Sparkles */}
        <g className="anim-float-2">
          <circle cx="210" cy="70" r="3" fill="#38bdf8" />
          <circle cx="390" cy="75" r="2.5" fill="#a855f7" />
          <circle cx="160" cy="460" r="3" fill="#10b981" />
          <circle cx="420" cy="450" r="3" fill="#f59e0b" />
        </g>
      </svg>
    </div>
  );
}
