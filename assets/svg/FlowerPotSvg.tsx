import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FlowerPotSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 200 200"
    className={"w-64 h-64"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs>
      <LinearGradient id="grad-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop
          offset="0%"
          style={{
            stopColor: "rgb(163, 184, 153)",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="100%"
          style={{
            stopColor: "rgb(132, 155, 124)",
            stopOpacity: 1,
          }}
        />
      </LinearGradient>
      <LinearGradient id="grad-pot" x1="0%" y1="0%" x2="0%" y2="100%">
        <Stop
          offset="0%"
          style={{
            stopColor: "rgb(217, 83, 79)",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="100%"
          style={{
            stopColor: "rgb(205, 92, 92)",
            stopOpacity: 1,
          }}
        />
      </LinearGradient>
    </Defs>
    <G filter="url(#shadow)">
      <Path
        d="M 60,160 Q 55,140 60,120 L 140,120 Q 145,140 140,160 Z"
        fill="url(#grad-pot)"
      />
      <Rect
        x={55}
        y={110}
        width={90}
        height={15}
        rx={5}
        fill="url(#grad-pot)"
      />
      <Path
        d="M 100,120 Q 100,80 110,60"
        stroke="#705446"
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
      />
      <Path
        d="M 110,60 Q 80,50 90,20"
        fill="url(#grad-leaf)"
        transform="rotate(-15, 100, 60)"
      />
      <Path
        d="M 110,60 Q 140,50 130,20"
        fill="url(#grad-leaf)"
        transform="rotate(15, 100, 60)"
      />
      <Path
        d="M 105,90 Q 75,80 85,50"
        fill="url(#grad-leaf)"
        transform="rotate(-5, 100, 90)"
      />
      <Path
        d="M 105,90 Q 135,80 125,50"
        fill="url(#grad-leaf)"
        transform="rotate(20, 100, 90)"
      />
      <Path
        d="M145 35 L150 45 L155 35 L165 30 L155 25 L150 15 L145 25 L135 30 Z"
        fill="#FFD700"
        opacity={0.9}
      />
    </G>
  </Svg>
);
export default React.memo(FlowerPotSvg);
