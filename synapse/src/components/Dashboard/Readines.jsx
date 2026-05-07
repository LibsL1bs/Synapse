function polarToCartesian(cx, cy, radius, angleDeg) {
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
        x: cx + radius * Math.cos(angleRad),
        y: cy + radius * Math.sin(angleRad),
    };
}

const TOTAL_TICKS = 40;
const LABELS = [
    ["100", -90],
    ["25", 0],
    ["50", 90],
    ["75", 180],
];
const RINGS = [
    [120, "fill-none stroke-slate-800", 14],
    [92, "fill-none stroke-slate-700", 2],
];

function Readines() {
    const size = 320;
    const center = size / 2;
    const textCenter = {textAnchor: "middle", dominantBaseline: "middle"};
    const point = (radius, angle) => polarToCartesian(center, center, radius, angle);

    return (
        <div className="w-full max-w-65 p-2">
            <svg
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-auto"
                role="img"
                aria-label="Readiness gauge em 0 por cento"
            >
                {RINGS.map(([radius, className, strokeWidth]) => (
                    <circle
                        key={radius}
                        cx={center}
                        cy={center}
                        r={radius}
                        className={className}
                        strokeWidth={strokeWidth}
                    />
                ))}

                {Array.from({length: TOTAL_TICKS}).map((_, index) => {
                    const angle = -90 + (360 / TOTAL_TICKS) * index;
                    const isMajor = index % 10 === 0;
                    const start = point(isMajor ? 118 : 123, angle);
                    const end = point(132, angle);

                    return (
                        <line
                            key={index}
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            className={isMajor ? "stroke-slate-400" : "stroke-slate-600"}
                            strokeWidth={isMajor ? "2" : "1"}
                            strokeLinecap="round"
                        />
                    );
                })}

                {LABELS.map(([value, angle]) => {
                    const position = point(148, angle);

                    return (
                        <text
                            key={value}
                            x={position.x}
                            y={position.y}
                            className="fill-slate-300 text-[16px]"
                            {...textCenter}
                        >
                            {value}
                        </text>
                    );
                })}

                <text
                    x={center}
                    y={center - 6}
                    className="fill-slate-50 text-[58px] font-bold"
                    {...textCenter}
                >
                    0%
                </text>

                <g transform={`translate(${center}, ${center + 34})`}>
                    <circle cx="-52" cy="0" r="4" className="fill-cyan-400" />
                    <text
                        x="-42"
                        y="1"
                        className="fill-slate-400 text-[13px] font-semibold"
                        letterSpacing="1"
                        dominantBaseline="middle"
                    >
                        READINESS
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default Readines;
