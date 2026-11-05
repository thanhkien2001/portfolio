import React from "react";
import "./Animations.scss";

export default function SkillsAnimation({isDark}) {
  const cardBg = isDark ? "#1e293b" : "#ffffff";
  const cardBorder = isDark ? "#334155" : "#e2e8f0";
  const textColor = isDark ? "#f8fafc" : "#1e293b";
  const subTextColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <div className="animated-svg-container">
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fullstack System Architecture"
      >
        <defs>
          <filter
            id="skillsShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="16"
              floodColor="#000000"
              floodOpacity="0.2"
            />
          </filter>

          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle
          cx="300"
          cy="250"
          r="230"
          fill="url(#centerGlow)"
          className="anim-glow"
        />

        {/* CONNECTING DATA PIPELINES (Between tiers) */}
        {/* Pipeline 1: Frontend to API */}
        <path
          d="M200 150 V 210"
          stroke="url(#blueGrad)"
          strokeWidth="3"
          className="anim-dash"
          fill="none"
        />
        {/* Pipeline 2: Mobile to API */}
        <path
          d="M370 150 C 370 180, 270 190, 240 220"
          stroke="url(#indigoGrad)"
          strokeWidth="2.5"
          className="anim-dash-fast"
          fill="none"
        />
        {/* Pipeline 3: API to Database */}
        <path
          d="M200 290 V 350"
          stroke="url(#amberGrad)"
          strokeWidth="3"
          className="anim-dash"
          fill="none"
        />
        {/* Pipeline 4: API to Docker Cloud */}
        <path
          d="M310 250 H 380"
          stroke="url(#emeraldGrad)"
          strokeWidth="2.5"
          className="anim-dash-fast"
          fill="none"
        />
        {/* Pipeline 5: Docker to Database */}
        <path
          d="M430 330 C 430 370, 360 380, 310 390"
          stroke="url(#blueGrad)"
          strokeWidth="2"
          className="anim-dash"
          fill="none"
        />

        {/* TIER 1: FRONTEND LAYER (Browser & Mobile Wireframe) */}
        <g className="anim-float-1">
          <g filter="url(#skillsShadow)">
            {/* Web Browser Frame */}
            <rect
              x="80"
              y="40"
              width="230"
              height="125"
              rx="12"
              fill={cardBg}
              stroke={cardBorder}
              strokeWidth="1.5"
            />
            {/* Browser Header */}
            <rect
              x="80"
              y="40"
              width="230"
              height="24"
              rx="12"
              fill={isDark ? "#0f172a" : "#f1f5f9"}
            />
            <rect
              x="80"
              y="54"
              width="230"
              height="10"
              fill={isDark ? "#0f172a" : "#f1f5f9"}
            />
            <circle cx="95" cy="52" r="3.5" fill="#ef4444" />
            <circle cx="106" cy="52" r="3.5" fill="#f59e0b" />
            <circle cx="117" cy="52" r="3.5" fill="#10b981" />
            <rect
              x="135"
              y="46"
              width="100"
              height="12"
              rx="3"
              fill={isDark ? "#1e293b" : "#e2e8f0"}
            />

            {/* Browser UI Content */}
            <rect
              x="96"
              y="74"
              width="60"
              height="8"
              rx="2"
              fill="url(#blueGrad)"
            />
            <rect
              x="96"
              y="88"
              width="195"
              height="4"
              rx="2"
              fill={isDark ? "#334155" : "#e2e8f0"}
            />
            <rect
              x="96"
              y="97"
              width="140"
              height="4"
              rx="2"
              fill={isDark ? "#334155" : "#e2e8f0"}
            />

            {/* UI Cards Mockup */}
            <rect
              x="96"
              y="110"
              width="60"
              height="38"
              rx="5"
              fill={isDark ? "#0f172a" : "#f8fafc"}
              stroke={cardBorder}
            />
            <circle cx="110" cy="124" r="5" fill="#06b6d4" />
            <rect
              x="120"
              y="122"
              width="30"
              height="4"
              rx="1"
              fill={subTextColor}
            />

            <rect
              x="164"
              y="110"
              width="60"
              height="38"
              rx="5"
              fill={isDark ? "#0f172a" : "#f8fafc"}
              stroke={cardBorder}
            />
            <circle cx="178" cy="124" r="5" fill="#6366f1" />
            <rect
              x="188"
              y="122"
              width="30"
              height="4"
              rx="1"
              fill={subTextColor}
            />

            <rect
              x="232"
              y="110"
              width="60"
              height="38"
              rx="5"
              fill={isDark ? "#0f172a" : "#f8fafc"}
              stroke={cardBorder}
            />
            <circle cx="246" cy="124" r="5" fill="#10b981" />
            <rect
              x="256"
              y="122"
              width="30"
              height="4"
              rx="1"
              fill={subTextColor}
            />
          </g>
        </g>

        {/* Mobile Device Frame alongside */}
        <g className="anim-float-2">
          <g filter="url(#skillsShadow)">
            <rect
              x="330"
              y="45"
              width="75"
              height="120"
              rx="14"
              fill={cardBg}
              stroke={cardBorder}
              strokeWidth="2"
            />
            {/* Screen content */}
            <rect
              x="336"
              y="55"
              width="63"
              height="100"
              rx="8"
              fill={isDark ? "#0f172a" : "#f8fafc"}
            />
            <circle cx="367" cy="51" r="1.5" fill={subTextColor} />
            <rect
              x="344"
              y="68"
              width="35"
              height="5"
              rx="2"
              fill="url(#indigoGrad)"
            />
            <rect
              x="344"
              y="80"
              width="47"
              height="20"
              rx="4"
              fill="rgba(99, 102, 241, 0.15)"
            />
            <rect
              x="344"
              y="108"
              width="47"
              height="20"
              rx="4"
              fill="rgba(6, 182, 212, 0.15)"
            />
            <circle cx="367" cy="144" r="4" fill={isDark ? "#334155" : "#e2e8f0"} />
          </g>
        </g>

        {/* TIER 2: API GATEWAY & MICROSERVICES HUB (Center) */}
        <g className="anim-float-3">
          <g filter="url(#skillsShadow)">
            <rect
              x="90"
              y="205"
              width="220"
              height="85"
              rx="14"
              fill={cardBg}
              stroke="url(#indigoGrad)"
              strokeWidth="2"
            />

            {/* API Icon Box */}
            <circle
              cx="126"
              cy="247"
              r="20"
              fill="rgba(99, 102, 241, 0.12)"
            />
            {/* Connecting Nodes icon */}
            <circle cx="120" cy="242" r="3.5" fill="#6366f1" />
            <circle cx="132" cy="242" r="3.5" fill="#a855f7" />
            <circle cx="126" cy="253" r="3.5" fill="#06b6d4" />
            <line
              x1="120"
              y1="242"
              x2="132"
              y2="242"
              stroke="#6366f1"
              strokeWidth="1.5"
            />
            <line
              x1="120"
              y1="242"
              x2="126"
              y2="253"
              stroke="#6366f1"
              strokeWidth="1.5"
            />
            <line
              x1="132"
              y1="242"
              x2="126"
              y2="253"
              stroke="#a855f7"
              strokeWidth="1.5"
            />

            <text
              x="155"
              y="238"
              fill={textColor}
              fontSize="13"
              fontWeight="bold"
            >
              RESTful API Gateway
            </text>
            <text
              x="155"
              y="254"
              fill="#6366f1"
              fontSize="9.5"
              fontWeight="600"
            >
              Clean Architecture &amp; Tenancy
            </text>
            <text x="155" y="270" fill={subTextColor} fontSize="8.5">
              Laravel · NodeJS · Microservices
            </text>
          </g>
        </g>

        {/* TIER 3: DATABASE CLUSTER & CACHE (Bottom Left) */}
        <g className="anim-float-1">
          <g filter="url(#skillsShadow)">
            <rect
              x="80"
              y="335"
              width="230"
              height="120"
              rx="14"
              fill={cardBg}
              stroke={cardBorder}
              strokeWidth="1.5"
            />

            <text
              x="100"
              y="360"
              fill={textColor}
              fontSize="12.5"
              fontWeight="bold"
            >
              Database &amp; Caching Layer
            </text>

            {/* Database Cylinder Stack (MySQL / MongoDB) */}
            <g transform="translate(100, 375)">
              <ellipse
                cx="25"
                cy="10"
                rx="20"
                ry="7"
                fill="url(#amberGrad)"
              />
              <path
                d="M5 10 V 22 C 5 26, 45 26, 45 22 V 10"
                fill="url(#amberGrad)"
                opacity="0.85"
              />
              <path
                d="M5 22 V 34 C 5 38, 45 38, 45 34 V 22"
                fill="url(#amberGrad)"
                opacity="0.7"
              />
              <path
                d="M5 34 V 46 C 5 50, 45 50, 45 46 V 34"
                fill="url(#amberGrad)"
                opacity="0.55"
              />
            </g>

            {/* Redis Lightning Cache Node */}
            <g transform="translate(170, 378)">
              <rect
                x="0"
                y="0"
                width="120"
                height="32"
                rx="6"
                fill={isDark ? "#0f172a" : "#f8fafc"}
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <circle cx="16" cy="16" r="8" fill="rgba(245, 158, 11, 0.2)" />
              {/* Lightning Bolt */}
              <path
                d="M17 10 L13 17 H17 L15 22 L20 15 H16 Z"
                fill="#f59e0b"
              />
              <text
                x="32"
                y="16"
                fill={textColor}
                fontSize="10"
                fontWeight="bold"
              >
                Redis Cache
              </text>
              <text x="32" y="26" fill="#10b981" fontSize="8" fontWeight="600">
                In-Memory Speed
              </text>
            </g>

            <rect
              x="170"
              y="418"
              width="120"
              height="22"
              rx="4"
              fill={isDark ? "#0f172a" : "#f8fafc"}
              stroke={cardBorder}
            />
            <text x="180" y="433" fill={subTextColor} fontSize="8.5">
              Elasticsearch Engine
            </text>
          </g>
        </g>

        {/* TIER 4: DOCKER, CLOUDFLARE & DEVOPS CLOUD (Right Side) */}
        <g className="anim-float-2">
          <g filter="url(#skillsShadow)">
            <rect
              x="370"
              y="200"
              width="170"
              height="150"
              rx="16"
              fill={cardBg}
              stroke="url(#emeraldGrad)"
              strokeWidth="2"
            />

            {/* Docker Icon Banner */}
            <circle
              cx="410"
              cy="240"
              r="22"
              fill="rgba(16, 185, 129, 0.12)"
            />
            {/* Rotating Gear */}
            <g className="anim-gear" transform="translate(410, 240)">
              <circle cx="0" cy="0" r="10" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="4 3" />
              <circle cx="0" cy="0" r="4" fill="#10b981" />
            </g>

            <text
              x="440"
              y="235"
              fill={textColor}
              fontSize="13"
              fontWeight="bold"
            >
              DevOps
            </text>
            <text
              x="440"
              y="250"
              fill="#10b981"
              fontSize="10"
              fontWeight="600"
            >
              CI/CD Pipeline
            </text>

            {/* Status Pills */}
            <rect
              x="385"
              y="275"
              width="140"
              height="24"
              rx="6"
              fill={isDark ? "#0f172a" : "#f1f5f9"}
              stroke={cardBorder}
            />
            <circle cx="398" cy="287" r="4" fill="#10b981" />
            <text
              x="408"
              y="291"
              fill={textColor}
              fontSize="9"
              fontWeight="600"
            >
              Docker Containers
            </text>

            <rect
              x="385"
              y="308"
              width="140"
              height="24"
              rx="6"
              fill={isDark ? "#0f172a" : "#f1f5f9"}
              stroke={cardBorder}
            />
            {/* Cloudflare Shield */}
            <path
              d="M396 316 L400 314 L404 316 V322 C404 325, 400 327, 400 327 C400 327, 396 325, 396 322 Z"
              fill="#f59e0b"
            />
            <text
              x="408"
              y="324"
              fill={textColor}
              fontSize="9"
              fontWeight="600"
            >
              Nginx &amp; Cloudflare
            </text>
          </g>
        </g>

        {/* Ambient Floating Sparkles & Badges */}
        <g className="anim-float-3">
          <circle cx="60" cy="280" r="3" fill="#6366f1" />
          <circle cx="530" cy="150" r="3.5" fill="#06b6d4" />
          <circle cx="480" cy="420" r="3" fill="#10b981" />
          <circle cx="340" cy="310" r="2.5" fill="#f59e0b" />
        </g>
      </svg>
    </div>
  );
}

