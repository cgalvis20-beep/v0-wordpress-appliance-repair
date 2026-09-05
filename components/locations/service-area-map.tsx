// Positions are derived from each city's real coordinates, projected relative
// to London's location and scaled to fit this viewBox — not exact cartography,
// but directionally accurate (verified against public coordinate data), unlike
// arbitrary decorative placement. Update these if a new service-area city is
// added.
const CITY_POSITIONS: Record<string, { x: number; y: number }> = {
  london: { x: 350, y: 260 },
  "st-thomas": { x: 375, y: 376 },
  woodstock: { x: 552, y: 179 },
  strathroy: { x: 199, y: 275 },
  ingersoll: { x: 497, y: 230 },
  tillsonburg: { x: 558, y: 326 },
  aylmer: { x: 456, y: 381 },
  dorchester: { x: 422, y: 261 },
}

interface ServiceAreaMapProps {
  cities: { slug: string; name: string }[]
}

export function ServiceAreaMap({ cities }: ServiceAreaMapProps) {
  return (
    <svg
      viewBox="0 0 700 500"
      className="w-full h-auto"
      role="img"
      aria-label="Map of our service area across Southwestern Ontario, with London at the center"
    >
      {/* Approximate service-area boundary, for visual context only */}
      <circle
        cx={CITY_POSITIONS.london.x}
        cy={CITY_POSITIONS.london.y}
        r={220}
        fill="none"
        stroke="currentColor"
        strokeDasharray="6 6"
        className="text-primary/20"
      />

      {cities.map((city) => {
        const pos = CITY_POSITIONS[city.slug]
        if (!pos) return null
        const isHub = city.slug === "london"

        return (
          <a key={city.slug} href={`/locations/${city.slug}`}>
            <g className="transition-opacity hover:opacity-80">
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHub ? 10 : 7}
                className={isHub ? "fill-primary" : "fill-accent"}
              />
              <text
                x={pos.x}
                y={pos.y - (isHub ? 18 : 14)}
                textAnchor="middle"
                className={
                  isHub
                    ? "fill-foreground text-[15px] font-semibold"
                    : "fill-foreground text-[13px]"
                }
              >
                {city.name}
              </text>
              <title>{`${city.name} — view service details`}</title>
            </g>
          </a>
        )
      })}
    </svg>
  )
}
