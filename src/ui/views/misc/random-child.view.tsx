import React, { ReactNode, useMemo } from "react";
import { View } from "react-native";

type RandomChildProps = {
  children: ReactNode | ReactNode[];
};

export const RandomChildView: React.FC<RandomChildProps> = ({ children }) => {
  const renderedChild = useMemo(() => {
    const childArray = React.Children.toArray(children);

    if (childArray.length === 0) return null;

    if (childArray.length === 1) {
      // 50% chance to show the only child
      return Math.random() < 0.5 ? childArray[0] : null;
    }

    // Pick one child randomly
    const randomIndex = Math.floor(Math.random() * childArray.length);
    return childArray[randomIndex];
  }, [children]);

  return <View>{renderedChild}</View>;
};
