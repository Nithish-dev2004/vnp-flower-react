import React from "react";

/* ---------- helpers ---------- */
const bez = (t, a, b, c) => [
  (1 - t) ** 2 * a[0] + 2 * (1 - t) * t * b[0] + t * t * c[0],
  (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * b[1] + t * t * c[1],
];

/* ---------- single flowers ---------- */
const Jasmine = ({ x = 0, y = 0, s = 1, rot = 0 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cy="-7" rx="4.6" ry="8" fill="#fff" stroke="#E4DDC8" strokeWidth=".8" transform={`rotate(${a})`} />
    ))}
    <circle r="3" fill="#F3D46B" />
  </g>
);

const Bud = ({ x = 0, y = 0, s = 1, rot = 0 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <path d="M0 -11 C6 -4 5 6 0 11 C-5 6 -6 -4 0 -11Z" fill="#fff" stroke="#E4DDC8" strokeWidth=".8" />
    <path d="M0 -8 V8" stroke="#E9E3D0" strokeWidth=".8" />
  </g>
);

const Kanak = ({ x = 0, y = 0, s = 1, rot = 0 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cy="-7" rx="5.4" ry="8.4" fill="#F7701F" stroke="#D95A0D" strokeWidth=".6" transform={`rotate(${a})`} />
    ))}
    <circle r="3" fill="#FDBA74" />
  </g>
);

const Marigold = ({ x = 0, y = 0, s = 1, rot = 0, c1 = "#F59E0B", c2 = "#F97316" }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <circle key={i} cx={Math.cos(a) * 10} cy={Math.sin(a) * 10} r="7.2" fill={c1} />;
    })}
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return <circle key={i} cx={Math.cos(a) * 6} cy={Math.sin(a) * 6} r="5.6" fill={c2} />;
    })}
    <circle r="4.6" fill="#B45309" />
  </g>
);

const Rose = ({ x = 0, y = 0, s = 1, rot = 0, c = "#D81B60" }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <circle r="15" fill={c} />
    <circle r="11" fill="#fff" opacity=".12" />
    <path d="M-1 0 a2.5 2.5 0 1 1 2.5 2.5 a5 5 0 1 1 -5 -5 a8 8 0 1 1 8 8 a11 11 0 1 1 -11 -11"
      fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.4" strokeLinecap="round" />
  </g>
);

const Leaf = ({ x = 0, y = 0, rot = 0, s = 1, c = "#2F7D4F" }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <path d="M0 0 C8 -8 22 -8 28 0 C22 8 8 8 0 0Z" fill={c} />
    <path d="M2 0 H24" stroke="#fff" strokeOpacity=".35" strokeWidth="1" />
  </g>
);

/* ---------- a string of flowers along a curve ---------- */
function Garland({ a, b, c, n, flower, leaves = true, thread = "#7A5A3A", every = 1 }) {
  const items = Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const [x, y] = bez(t, a, b, c);
    const [x2, y2] = bez(Math.min(1, t + 0.02), a, b, c);
    const ang = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
    return { x, y, i, t, ang };
  });
  return (
    <g>
      <path d={`M${a[0]} ${a[1]} Q${b[0]} ${b[1]} ${c[0]} ${c[1]}`} fill="none" stroke={thread} strokeWidth="2" />
      {leaves &&
        items.map((p) => (
          <Leaf key={`l${p.i}`} x={p.x} y={p.y} rot={p.ang + (p.i % 2 ? 70 : -70)} s={0.7} c={p.i % 3 ? "#2F7D4F" : "#3F9A62"} />
        ))}
      {items.map((p) => (
        <g key={p.i}>{flower(p.x, p.y, p.i, p.ang)}</g>
      ))}
    </g>
  );
}

/* ---------- reusable backdrop ---------- */
const Bg = ({ id, from, to, w = 400, h = 300 }) => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
    </defs>
    <rect width={w} height={h} fill={`url(#${id})`} />
  </>
);

const Wrap = ({ children, w = 400, h = 300, label }) => (
  <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className="art">
    {children}
  </svg>
);

/* ---------- hanging hair strands ---------- */
export function HairArt({ kind = "jasmine" }) {
  const cfg = {
    jasmine: { from: "#E3F0E6", to: "#F8FBF4", f: (x, y, i, a) => <Jasmine x={x} y={y} s={1.05} rot={a + i * 20} />, n: 12 },
    mullai: { from: "#E8F1DF", to: "#FBFCF2", f: (x, y, i, a) => <Bud x={x} y={y} s={1.15} rot={a + 90 + (i % 2 ? 25 : -25)} />, n: 14 },
    kanakambaram: { from: "#FFE9D6", to: "#FFF7EC", f: (x, y, i, a) => <Kanak x={x} y={y} s={1.05} rot={a + i * 20} />, n: 12 },
  }[kind];
  const strand = (x, len, sway) => (
    <g>
      <Garland a={[x, 18]} b={[x + sway, 18 + len / 2]} c={[x, 18 + len]} n={cfg.n} flower={cfg.f} />
      {/* tassel */}
      <path d={`M${x} ${18 + len} v14 M${x} ${18 + len} l-5 12 M${x} ${18 + len} l5 12`} stroke="#7A5A3A" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
  return (
    <Wrap label={`${kind} hair flower strands`}>
      <Bg id={`h-${kind}`} from={cfg.from} to={cfg.to} />
      <circle cx="320" cy="70" r="46" fill="#fff" opacity=".5" />
      <rect x="40" y="10" width="320" height="8" rx="4" fill="#7A5A3A" opacity=".55" />
      {strand(110, 220, 18)}
      {strand(200, 250, -14)}
      {strand(290, 200, 16)}
    </Wrap>
  );
}

/* ---------- marigold garland / loose ---------- */
export function MarigoldArt({ loose = false }) {
  return (
    <Wrap label="marigold flowers">
      <Bg id={loose ? "m2" : "m1"} from="#FFE8A8" to="#FFF6DA" />
      <circle cx="70" cy="240" r="60" fill="#fff" opacity=".35" />
      {loose ? (
        <g>
          {Array.from({ length: 20 }, (_, i) => {
            const x = 30 + ((i * 97) % 340);
            const y = 25 + ((i * 61 + (i % 3) * 40) % 250);
            return (
              <Marigold key={i} x={x} y={y} s={0.9 + (i % 3) * 0.2} rot={i * 17} c1={i % 4 === 0 ? "#F97316" : "#F59E0B"} c2={i % 4 === 0 ? "#EA580C" : "#F97316"} />
            );
          })}
          {[[90, 80], [300, 120], [180, 245], [340, 235]].map(([x, y], i) => (
            <Leaf key={i} x={x} y={y} rot={i * 70} s={1.2} />
          ))}
        </g>
      ) : (
        <g>
          <Garland a={[10, 30]} b={[200, 310]} c={[390, 30]} n={13}
            flower={(x, y, i) => <Marigold x={x} y={y} s={1.25} rot={i * 20} c1={i % 3 === 0 ? "#F97316" : "#F59E0B"} c2={i % 3 === 0 ? "#EA580C" : "#F97316"} />} />
          <Garland a={[10, 10]} b={[200, 250]} c={[390, 10]} n={11} leaves={false}
            flower={(x, y, i) => <Marigold x={x} y={y + 6} s={0.9} rot={i * 33} c1="#FBBF24" c2="#F59E0B" />} />
        </g>
      )}
    </Wrap>
  );
}

/* ---------- rose garland / petals ---------- */
export function RoseArt({ loose = false }) {
  return (
    <Wrap label="rose flowers">
      <Bg id={loose ? "r2" : "r1"} from="#FFD9E4" to="#FFF1F5" />
      <circle cx="330" cy="60" r="50" fill="#fff" opacity=".45" />
      {loose ? (
        <g>
          {Array.from({ length: 36 }, (_, i) => {
            const x = 40 + ((i * 61) % 330);
            const y = 40 + ((i * 47) % 230);
            return (
              <path key={i} transform={`translate(${x} ${y}) rotate(${i * 41})`}
                d="M0 0 C10 -12 24 -6 22 6 C20 16 6 16 0 0Z"
                fill={["#E11D74", "#F06292", "#D81B60", "#F8A5C2"][i % 4]} opacity=".92" />
            );
          })}
        </g>
      ) : (
        <g>
          <Garland a={[10, 40]} b={[200, 300]} c={[390, 40]} n={11}
            flower={(x, y, i) => <Rose x={x} y={y} s={1.15} rot={i * 40} c={i % 2 ? "#E11D74" : "#C2185B"} />} />
          <Garland a={[10, 12]} b={[200, 220]} c={[390, 12]} n={9} leaves={false}
            flower={(x, y, i) => <Rose x={x} y={y + 8} s={0.8} rot={i * 55} c="#F06292" />} />
        </g>
      )}
    </Wrap>
  );
}

/* ---------- lotus + diya ---------- */
export function LotusArt() {
  const petal = "M0 0 C-15 -12 -15 -38 0 -58 C15 -38 15 -12 0 0Z";
  return (
    <Wrap label="lotus flower with a lamp">
      <Bg id="lo" from="#FCE3EE" to="#EAF5F0" />
      <ellipse cx="200" cy="262" rx="190" ry="34" fill="#BFE0D4" />
      <ellipse cx="90" cy="248" rx="52" ry="14" fill="#2F7D4F" />
      <path d="M90 248 L120 242" stroke="#1E5A44" strokeWidth="2" />
      <ellipse cx="318" cy="252" rx="46" ry="12" fill="#3F9A62" />
      <g transform="translate(205 240)">
        {[-64, 64].map((a) => <path key={a} d={petal} fill="#F6A6C4" transform={`rotate(${a})`} />)}
        {[-38, 38].map((a) => <path key={a} d={petal} fill="#F283AC" transform={`rotate(${a})`} />)}
        <path d={petal} fill="#E85D95" transform="scale(1.1)" />
        <path d={petal} fill="#F7A8C6" transform="rotate(-16) scale(.9)" />
        <path d={petal} fill="#F7A8C6" transform="rotate(16) scale(.9)" />
        <circle cy="-6" r="6" fill="#F9C74F" />
      </g>
      {/* diya */}
      <g transform="translate(326 214)">
        <path d="M-22 0 C-18 16 18 16 22 0Z" fill="#C2410C" />
        <path d="M0 -6 C-7 -16 0 -24 0 -32 C8 -24 7 -14 0 -6Z" fill="#FBBF24" />
        <path d="M0 -8 C-3 -14 0 -18 0 -22 C4 -18 3 -13 0 -8Z" fill="#FFF3C4" />
      </g>
      <circle cx="326" cy="196" r="22" fill="#FBBF24" opacity=".25" />
    </Wrap>
  );
}

/* ---------- wedding arch ---------- */
export function WeddingArt() {
  return (
    <Wrap label="wedding flower decoration">
      <Bg id="we" from="#FFF3D6" to="#FFE5EC" />
      {/* pillars + arch */}
      <rect x="62" y="70" width="14" height="230" fill="#E8D4A8" />
      <rect x="324" y="70" width="14" height="230" fill="#E8D4A8" />
      <path d="M69 74 Q200 -30 331 74" fill="none" stroke="#E8D4A8" strokeWidth="14" />
      {/* arch garland */}
      <Garland a={[66, 78]} b={[200, -26]} c={[334, 78]} n={15}
        flower={(x, y, i) => (i % 2 ? <Rose x={x} y={y} s={0.85} rot={i * 30} c="#E11D74" /> : <Marigold x={x} y={y} s={0.95} rot={i * 20} />)} />
      {/* swags */}
      <Garland a={[70, 100]} b={[200, 190]} c={[330, 100]} n={11} leaves={false}
        flower={(x, y, i) => <Jasmine x={x} y={y} s={1.1} rot={i * 25} />} />
      {/* hanging strands */}
      {[120, 280].map((x) => (
        <Garland key={x} a={[x, 130]} b={[x + 8, 190]} c={[x, 250]} n={7} leaves={false}
          flower={(px, py, i) => <Marigold x={px} y={py} s={0.7} rot={i * 20} />} />
      ))}
      {/* floor flowers */}
      <rect x="0" y="270" width="400" height="30" fill="#F3E3BD" />
      {[150, 185, 220, 255].map((x, i) => (
        <Rose key={x} x={x} y={282} s={0.7} c={i % 2 ? "#E11D74" : "#F06292"} />
      ))}
    </Wrap>
  );
}

/* ---------- flower basket ---------- */
export function Basket({ x = 0, y = 0, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* flowers heap */}
      <Leaf x={-70} y={-60} rot={-150} s={1.6} />
      <Leaf x={70} y={-60} rot={-30} s={1.6} />
      <Marigold x={-52} y={-52} s={1.5} />
      <Marigold x={50} y={-56} s={1.5} c1="#F97316" c2="#EA580C" />
      <Rose x={-18} y={-72} s={1.35} />
      <Rose x={22} y={-76} s={1.25} c="#F06292" />
      <Jasmine x={-76} y={-30} s={1.4} />
      <Jasmine x={72} y={-26} s={1.4} />
      <Jasmine x={0} y={-46} s={1.5} />
      <Kanak x={-34} y={-40} s={1.2} />
      <Kanak x={36} y={-42} s={1.2} />
      {/* basket */}
      <path d="M-90 -28 L-72 60 Q0 76 72 60 L90 -28Z" fill="#B97A3E" />
      <path d="M-90 -28 Q0 -12 90 -28 L90 -20 Q0 -4 -90 -20Z" fill="#8F5A2A" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${-86 + i * 4} ${-6 + i * 20} Q0 ${10 + i * 20} ${86 - i * 4} ${-6 + i * 20}`} fill="none" stroke="#8F5A2A" strokeWidth="2.4" />
      ))}
      {[-54, -18, 18, 54].map((vx) => (
        <path key={vx} d={`M${vx} -14 L${vx * 0.82} 64`} stroke="#8F5A2A" strokeWidth="2" opacity=".7" />
      ))}
    </g>
  );
}

export function BasketArt() {
  return (
    <Wrap label="basket of fresh flowers" h={300}>
      <Bg id="bk" from="#E6F1EA" to="#FFF6DA" />
      <circle cx="320" cy="70" r="46" fill="#FBBF24" opacity=".35" />
      <ellipse cx="200" cy="274" rx="140" ry="12" fill="#1E5A44" opacity=".14" />
      <Basket x={200} y={190} s={1.45} />
      {/* thread spool */}
      <g transform="translate(60 232)">
        <rect x="-16" y="-24" width="32" height="48" rx="4" fill="#F3D9A4" />
        <rect x="-20" y="-28" width="40" height="8" rx="3" fill="#B97A3E" />
        <rect x="-20" y="20" width="40" height="8" rx="3" fill="#B97A3E" />
        {[-14, -6, 2, 10].map((yy) => <path key={yy} d={`M-16 ${yy} h32`} stroke="#E4C583" strokeWidth="2" />)}
      </g>
    </Wrap>
  );
}

/* ---------- hero scene ---------- */
export function HeroArt() {
  return (
    <svg viewBox="0 0 520 560" className="art" role="img" aria-label="Garlands, jasmine strands and a basket of fresh flowers" preserveAspectRatio="xMidYMid slice">
      <Bg id="he" from="#FFF0C7" to="#E3F1E8" w={520} h={560} />
      <circle cx="400" cy="150" r="96" fill="#fff" opacity=".45" />
      <circle cx="400" cy="150" r="62" fill="#FBBF24" opacity=".35" />
      <rect x="20" y="22" width="480" height="9" rx="4.5" fill="#7A5A3A" opacity=".5" />
      {/* garlands across the top */}
      <Garland a={[24, 36]} b={[260, 330]} c={[496, 36]} n={15}
        flower={(x, y, i) => <Marigold x={x} y={y} s={1.45} rot={i * 20} c1={i % 3 === 0 ? "#F97316" : "#F59E0B"} c2={i % 3 === 0 ? "#EA580C" : "#F97316"} />} />
      {/* hanging jasmine strands */}
      <Garland a={[90, 44]} b={[112, 190]} c={[88, 345]} n={13} flower={(x, y, i, a) => <Jasmine x={x} y={y} s={1.2} rot={a + i * 20} />} />
      <path d="M88 345 v16 M88 345 l-6 14 M88 345 l6 14" stroke="#7A5A3A" strokeWidth="2" strokeLinecap="round" />
      <Garland a={[432, 44]} b={[410, 200]} c={[434, 370]} n={14} flower={(x, y, i) => <Rose x={x} y={y} s={0.95} rot={i * 40} c={i % 2 ? "#E11D74" : "#F06292"} />} />
      <path d="M434 370 v16 M434 370 l-6 14 M434 370 l6 14" stroke="#7A5A3A" strokeWidth="2" strokeLinecap="round" />
      {/* ground + basket */}
      <ellipse cx="260" cy="524" rx="190" ry="16" fill="#1E5A44" opacity=".16" />
      <Basket x={260} y={430} s={1.9} />
    </svg>
  );
}

/* ---------- picker ---------- */
export default function Art({ kind }) {
  switch (kind) {
    case "jasmine":
    case "mullai":
    case "kanakambaram":
      return <HairArt kind={kind} />;
    case "marigold":
      return <MarigoldArt />;
    case "marigold-loose":
      return <MarigoldArt loose />;
    case "rose":
      return <RoseArt />;
    case "rose-loose":
      return <RoseArt loose />;
    case "lotus":
      return <LotusArt />;
    case "wedding":
      return <WeddingArt />;
    case "basket":
      return <BasketArt />;
    default:
      return <HairArt kind="jasmine" />;
  }
}
