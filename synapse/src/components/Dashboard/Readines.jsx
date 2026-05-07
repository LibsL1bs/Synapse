function polarToCartesian(cx, cy, radius, angleDeg) {
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
        x: cx + radius * Math.cos(angleRad),
        y: cy + radius * Math.sin(angleRad),
    };
}

function Readines() {
    const size = 320;
    const center = size / 2;
    const outerRadius = 120;
    const innerRadius = 92;
    const tickOuterRadius = 132;
    const majorTickInnerRadius = 118;
    const minorTickInnerRadius = 123;
    const totalTicks = 40;

    const labels = [
        {value: "100", angle: -90},
        {value: "25", angle: 0},
        {value: "50", angle: 90},
        {value: "75", angle: 180},
    ];

    return (
        <div className="w-full max-w-sm mx-auto p-4">
            <svg
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-auto"
                role="img"
                aria-label="Readiness gauge em 0 por cento"
            >
                <circle
                    cx={center}
                    cy={center}
                    r={outerRadius}
                    className="fill-none stroke-slate-800"
                    strokeWidth="14"
                />

                <circle
                    cx={center}
                    cy={center}
                    r={innerRadius}
                    className="fill-none stroke-slate-700"
                    strokeWidth="2"
                />

                {Array.from({length: totalTicks}).map((_, index) => {
                    const angle = -90 + (360 / totalTicks) * index;
                    const isMajor = index % 10 === 0;
                    const start = polarToCartesian(
                        center,
                        center,
                        isMajor ? majorTickInnerRadius : minorTickInnerRadius,
                        angle
                    );
                    const end = polarToCartesian(center, center, tickOuterRadius, angle);

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

                {labels.map((label) => {
                    const position = polarToCartesian(center, center, 148, label.angle);

                    return (
                        <text
                            key={label.value}
                            x={position.x}
                            y={position.y}
                            className="fill-slate-300 text-[16px]"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {label.value}
                        </text>
                    );
                })}

                <text
                    x={center}
                    y={center - 6}
                    className="fill-slate-50 text-[58px] font-bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
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
