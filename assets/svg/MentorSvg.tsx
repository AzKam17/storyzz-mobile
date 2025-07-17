import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const MentorSvg = (props: SvgProps) => (
  <Svg
  // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M17 15.5c1.72 0 3.75.8 4 1.28v.72h-8v-.72c.25-.48 2.28-1.28 4-1.28Zm0-1.5c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75Zm-7.5-1c-2.33 0-7 1.17-7 3.5V19h7v-1.5H4v-1c0-.63 2.79-2.16 6.32-2a5.1 5.1 0 0 1 1.55-1.25c-.78-.16-1.574-.244-2.37-.25Zm0-6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM17 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM17 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </Svg>
)
export default MentorSvg