function polarParaXY(cx, cy, raio, grau) {
    const rad = (grau * Math.PI) / 180;
    return {
        x: cx + raio * Math.cos(rad),
        y: cy + raio * Math.sin(rad),
    };
}

const TOTAL_MARCAS = 40;
const ROTULOS = [
    ["100", -90],
    ["25", 0],
    ["50", 90],
    ["75", 180],
];
const ANEIS = [
    [120, "fill-none stroke-slate-800", 14],
    [92, "fill-none stroke-slate-700", 2],
];

function Readines({valor = 0}) {
    const size = 320;
    const center = size / 2;
    const centralizarTexto = {textAnchor: "middle", dominantBaseline: "middle"};
    const ponto = (raio, grau) => polarParaXY(center, center, raio, grau);
    const valor_normalizado = Math.min(Math.max(valor, 0), 100);

    return (
        <div className="mx-auto w-full max-w-xs p-2 sm:max-w-sm">
            <svg
                viewBox={`0 0 ${size} ${size}`}
                className="w-full h-auto"
                role="img"
                aria-label={`Readiness gauge em ${valor_normalizado} por cento`}
            >
                {ANEIS.map(([radius, className, strokeWidth]) => (
                    <circle
                        key={radius}
                        cx={center}
                        cy={center}
                        r={radius}
                        className={className}
                        strokeWidth={strokeWidth}/>
                ))}

                {Array.from({length: TOTAL_MARCAS}).map((_, i) => {
                    const grau = -90 + (360 / TOTAL_MARCAS) * i;
                    const ePrincipal = i % 10 === 0;
                    const inicio = ponto(ePrincipal ? 118 : 123, grau);
                    const fim = ponto(132, grau);

                    return (
                        <line
                            key={i}
                            x1={inicio.x}
                            y1={inicio.y}
                            x2={fim.x}
                            y2={fim.y}
                            className={ePrincipal ? "stroke-slate-400" : "stroke-slate-600"}
                            strokeWidth={ePrincipal ? "2" : "1"}
                            strokeLinecap="round"/>
                    );
                })}

                {ROTULOS.map(([valor, grau]) => {
                    const pos = ponto(148, grau);

                    return (
                        <text
                            key={valor}
                            x={pos.x}
                            y={pos.y}
                            className="fill-slate-300 text-[16px]"
                            {...centralizarTexto}>
                            {valor}
                        </text>
                    );
                })}

                <text x={center} y={center - 6} className="fill-slate-50 text-[58px] font-bold" {...centralizarTexto}>
                    {valor_normalizado}%
                </text>

                <g transform={`translate(${center}, ${center + 34})`}>
                    <circle cx="-52" cy="0" r="4" className="fill-cyan-400" />
                    <text
                        x="-42"
                        y="1"
                        className="fill-slate-400 text-[13px] font-semibold"
                        letterSpacing="1"
                        dominantBaseline="middle">
                        READINESS
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default Readines;
