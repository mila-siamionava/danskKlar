export default function AarhusSketch({
  className = "",
  title = "Aarhus Sketch",
}) {
  return (
    <svg
      viewBox="0 0 1600 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* WATER */}
        <path d="M20 340 H1580" />

        <path d="M40 360 h110" />
        <path d="M180 370 h90" />
        <path d="M310 355 h130" />
        <path d="M470 372 h90" />
        <path d="M590 360 h140" />
        <path d="M760 375 h110" />
        <path d="M900 356 h150" />
        <path d="M1090 372 h120" />
        <path d="M1260 358 h110" />
        <path d="M1410 374 h140" />

        {/* AARHUS Ø */}
        <g>
          <path d="M40 340 V255 L100 205 L155 255 V340" />
          <path d="M100 205 V340" />

          <path d="M155 340 V175 L215 110 L250 340" />
          <path d="M215 110 L240 135" />

          <path d="M250 340 V255 L310 215 L365 260 V340" />
          <path d="M310 215 V340" />

          <path d="M365 340 V275 L420 235 L465 275 V340" />

          <path d="M65 285 h16 v20 H65z" />
          <path d="M95 270 h16 v20 H95z" />
          <path d="M125 285 h16 v20 H125z" />

          <path d="M180 220 h18" />
          <path d="M180 245 h18" />
          <path d="M180 270 h18" />
          <path d="M180 295 h18" />

          <path d="M275 280 h15 v18 h-15z" />
          <path d="M305 270 h15 v18 h-15z" />
          <path d="M335 285 h15 v18 h-15z" />
        </g>

        {/* LEFT SAILBOAT */}
        <g>
          <path d="M135 345 Q165 360 195 345" />
          <path d="M165 345 V250" />
          <path d="M165 260 L130 330 H165z" />
          <path d="M168 270 L195 330 H168z" />
        </g>

        {/* BRIDGE */}
        <g>
          <path d="M450 330 H640" />
          <path d="M450 315 H640" />

          <path d="M470 315 Q495 275 520 315" />
          <path d="M520 315 Q545 275 570 315" />
          <path d="M570 315 Q595 275 620 315" />

          <path d="M470 300 V285" />
          <path d="M520 300 V280" />
          <path d="M570 300 V280" />
          <path d="M620 300 V285" />
        </g>

        {/* AARHUS RÅDHUS */}
        <g>
          <path d="M650 340 V235 H850 V340" />

          <path d="M730 235 V85 H790 V340" />
          <path d="M730 85 L760 70 L790 85" />

          <circle cx="760" cy="160" r="28" />

          <path d="M760 160 L760 142" />
          <path d="M760 160 L775 172" />

          <path d="M680 260 V330" />
          <path d="M705 260 V330" />
          <path d="M820 260 V330" />

          <path d="M745 90 V135" />
          <path d="M760 85 V135" />
          <path d="M775 90 V135" />
        </g>

        {/* DOKK1 */}
        <g>
          <path d="M865 260 L930 220 H1140 L1190 250 L1150 285 H920z" />

          <path d="M920 285 H1150" />
          <path d="M900 300 H1160" />

          <path d="M920 300 L980 340" />
          <path d="M1100 300 L1035 340" />

          <path d="M960 300 V335" />
          <path d="M1010 300 V335" />
          <path d="M1060 300 V335" />
          <path d="M1110 300 V335" />

          <path d="M900 340 H1165" />
        </g>

        {/* ARoS */}
        <g>
          <path d="M1190 340 V255 H1350 V340" />

          <ellipse cx="1270" cy="225" rx="95" ry="25" />
          <ellipse cx="1270" cy="235" rx="82" ry="15" />

          <path d="M1215 280 h35 v45 h-35z" />
          <path d="M1290 280 h35 v45 h-35z" />
        </g>

        {/* TREES */}
        <g>
          <path d="M620 340 V312" />
          <circle cx="620" cy="300" r="22" />

          <path d="M860 340 V312" />
          <circle cx="860" cy="300" r="22" />

          <path d="M1170 340 V312" />
          <circle cx="1170" cy="300" r="22" />

          <path d="M1375 340 V312" />
          <circle cx="1375" cy="300" r="22" />
        </g>

        {/* RIGHT HARBOUR */}
        <g>
          <path d="M1385 340 Q1430 355 1475 340" />
          <path d="M1430 340 V245" />
          <path d="M1430 255 L1395 325 H1430z" />
          <path d="M1435 265 L1470 325 H1435z" />

          <path d="M1480 340 Q1515 350 1545 340" />
          <path d="M1510 340 V260" />
          <path d="M1510 275 L1485 325 H1510z" />
        </g>

        {/* CLOUDS */}
        <path d="M300 145 Q320 115 345 145 Q370 105 410 145" />
        <path d="M900 145 Q920 115 945 145 Q970 105 1010 145" />
        <path d="M1250 145 Q1270 115 1295 145 Q1320 105 1360 145" />

        {/* BIRDS */}
        <path d="M520 130 Q530 120 540 130 Q550 120 560 130" />
        <path d="M1080 120 Q1090 110 1100 120 Q1110 110 1120 120" />
      </g>
    </svg>
  );
}