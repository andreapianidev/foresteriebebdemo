"use client";

import { useState } from "react";
import { Trail, TrailWaypoint } from "@/data/ebikes";

const waypointIcon: Record<TrailWaypoint["type"], { color: string; bg: string; symbol: string }> = {
  start: { color: "#16a34a", bg: "#dcfce7", symbol: "S" },
  end: { color: "#16a34a", bg: "#dcfce7", symbol: "F" },
  poi: { color: "#2563eb", bg: "#dbeafe", symbol: "●" },
  rest: { color: "#ea580c", bg: "#ffedd5", symbol: "☕" },
  viewpoint: { color: "#7c3aed", bg: "#ede9fe", symbol: "👁" },
};

const difficultyGradient: Record<string, [string, string]> = {
  Facile: ["#22c55e", "#16a34a"],
  Media: ["#eab308", "#ca8a04"],
  Difficile: ["#ef4444", "#dc2626"],
};

interface TrailMapProps {
  trail: Trail;
  isExpanded: boolean;
}

export default function TrailMap({ trail, isExpanded }: TrailMapProps) {
  const [hoveredWaypoint, setHoveredWaypoint] = useState<number | null>(null);
  const [gradientColors] = useState(difficultyGradient[trail.difficulty] || ["#22c55e", "#16a34a"]);

  const visibleWaypoints = trail.waypoints.filter((w) => w.type !== "end");

  const maxElevation = Math.max(...trail.elevationProfile);
  const profilePoints = trail.elevationProfile
    .map((val, i) => {
      const x = 30 + (i / (trail.elevationProfile.length - 1)) * 400;
      const y = 55 - (val / maxElevation) * 45;
      return `${x},${y}`;
    })
    .join(" ");
  const profileFill = `${profilePoints} 430,58 30,58`;

  return (
    <div className="space-y-3">
      {/* Map */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl border border-green-100 overflow-hidden">
        <svg
          viewBox="0 0 460 280"
          className="w-full h-auto"
          style={{ minHeight: 200 }}
        >
          <defs>
            <linearGradient id={`route-${trail.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
            <filter id={`glow-${trail.id}`}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id={`grid-${trail.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d1d5db" strokeWidth="0.3" opacity="0.5" />
            </pattern>
            <pattern id={`topo-${trail.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#a7f3d0" strokeWidth="0.4" opacity="0.6" />
              <circle cx="20" cy="20" r="30" fill="none" stroke="#a7f3d0" strokeWidth="0.3" opacity="0.4" />
            </pattern>
          </defs>

          {/* Background patterns */}
          <rect width="460" height="280" fill={`url(#grid-${trail.id})`} />
          <rect width="460" height="280" fill={`url(#topo-${trail.id})`} />

          {/* Terrain shading */}
          <ellipse cx="120" cy="100" rx="80" ry="50" fill="#bbf7d0" opacity="0.25" />
          <ellipse cx="350" cy="160" rx="70" ry="45" fill="#bbf7d0" opacity="0.2" />
          <ellipse cx="230" cy="70" rx="60" ry="35" fill="#a7f3d0" opacity="0.2" />

          {/* Route shadow */}
          <path
            d={trail.routePath}
            fill="none"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(2, 2)"
          />

          {/* Route dashed background */}
          <path
            d={trail.routePath}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Route main */}
          <path
            d={trail.routePath}
            fill="none"
            stroke={`url(#route-${trail.id})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#glow-${trail.id})`}
            className={isExpanded ? "animate-draw-route" : ""}
            style={{
              strokeDasharray: isExpanded ? 1200 : 0,
              strokeDashoffset: isExpanded ? 0 : 0,
            }}
          />

          {/* Direction arrows along route */}
          <path
            d={trail.routePath}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 18"
            opacity="0.6"
          />

          {/* Waypoints */}
          {visibleWaypoints.map((wp, i) => {
            const config = waypointIcon[wp.type];
            const isHovered = hoveredWaypoint === i;
            return (
              <g
                key={i}
                onMouseEnter={() => setHoveredWaypoint(i)}
                onMouseLeave={() => setHoveredWaypoint(null)}
                className="cursor-pointer"
                style={{ transition: "transform 0.2s" }}
              >
                {/* Pulse ring for start */}
                {wp.type === "start" && (
                  <circle
                    cx={wp.x}
                    cy={wp.y}
                    r="14"
                    fill="none"
                    stroke={config.color}
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="animate-pulse"
                  />
                )}

                {/* Marker shadow */}
                <circle cx={wp.x + 1} cy={wp.y + 1} r="9" fill="rgba(0,0,0,0.15)" />

                {/* Marker outer */}
                <circle
                  cx={wp.x}
                  cy={wp.y}
                  r={isHovered ? 11 : 9}
                  fill="white"
                  stroke={config.color}
                  strokeWidth="2.5"
                  style={{ transition: "r 0.2s" }}
                />

                {/* Marker inner */}
                <circle cx={wp.x} cy={wp.y} r="5" fill={config.color} opacity="0.2" />

                {/* Marker symbol */}
                <text
                  x={wp.x}
                  y={wp.y + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={wp.type === "start" || wp.type === "end" ? "8" : "7"}
                  fontWeight="bold"
                  fill={config.color}
                >
                  {config.symbol}
                </text>

                {/* Label */}
                {(isHovered || wp.type === "start" || wp.type === "viewpoint") && (
                  <g>
                    <rect
                      x={wp.x - 40}
                      y={wp.y - 26}
                      width="80"
                      height="16"
                      rx="4"
                      fill="white"
                      stroke={config.color}
                      strokeWidth="0.8"
                      opacity="0.95"
                      filter={`url(#glow-${trail.id})`}
                    />
                    <text
                      x={wp.x}
                      y={wp.y - 17}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="6.5"
                      fontWeight="600"
                      fill="#374151"
                    >
                      {wp.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Scale bar */}
          <g transform="translate(350, 258)">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#6b7280" strokeWidth="1" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="#6b7280" strokeWidth="1" />
            <line x1="60" y1="-3" x2="60" y2="3" stroke="#6b7280" strokeWidth="1" />
            <text x="30" y="10" textAnchor="middle" fontSize="6" fill="#9ca3af">
              ~{parseInt(trail.distance) > 20 ? "5" : "2"} km
            </text>
          </g>

          {/* Compass */}
          <g transform="translate(430, 30)">
            <circle cx="0" cy="0" r="14" fill="white" stroke="#d1d5db" strokeWidth="0.8" opacity="0.9" />
            <text x="0" y="-3" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#374151">N</text>
            <polygon points="0,-10 -3,-5 3,-5" fill="#ef4444" opacity="0.8" />
            <polygon points="0,10 -3,5 3,5" fill="#9ca3af" opacity="0.5" />
          </g>

          {/* Map title */}
          <g transform="translate(15, 18)">
            <text fontSize="9" fontWeight="700" fill="#1f2937">{trail.name}</text>
            <text x="0" y="13" fontSize="6.5" fill="#6b7280">{trail.distance} · {trail.elevation} dislivello</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100 shadow-sm">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white shadow-sm" /> Partenza
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-white shadow-sm" /> Punto interesse
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 border border-white shadow-sm" /> Sosta
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 border border-white shadow-sm" /> Panorama
            </span>
          </div>
        </div>
      </div>

      {/* Elevation Profile */}
      <div className="bg-white rounded-xl border border-gray-100 p-3">
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1.5">Profilo altimetrico</p>
        <svg viewBox="0 0 460 65" className="w-full h-auto">
          <defs>
            <linearGradient id={`elev-fill-${trail.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.3" />
              <stop offset="100%" stopColor={gradientColors[0]} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
            <line
              key={i}
              x1="30"
              y1={58 - pct * 45}
              x2="430"
              y2={58 - pct * 45}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              strokeDasharray={i === 0 ? "0" : "2 4"}
            />
          ))}

          {/* Elevation labels */}
          <text x="26" y="60" textAnchor="end" fontSize="5.5" fill="#9ca3af">0</text>
          <text x="26" y="14" textAnchor="end" fontSize="5.5" fill="#9ca3af">{maxElevation}m</text>
          <text x="26" y="37" textAnchor="end" fontSize="5.5" fill="#9ca3af">{Math.round(maxElevation / 2)}m</text>

          {/* Fill area */}
          <polygon
            points={profileFill}
            fill={`url(#elev-fill-${trail.id})`}
          />

          {/* Profile line */}
          <polyline
            points={profilePoints}
            fill="none"
            stroke={gradientColors[0]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start / end labels */}
          <text x="30" y="64" textAnchor="middle" fontSize="5" fill="#9ca3af">Partenza</text>
          <text x="430" y="64" textAnchor="middle" fontSize="5" fill="#9ca3af">Arrivo</text>
        </svg>
      </div>
    </div>
  );
}
