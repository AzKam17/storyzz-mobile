import React from "react";
import { Platform } from "react-native";

export function usePlatform() {
  const [isIos, setIsIos] = React.useState<boolean>(false);
  const [isAndroid, setIsAndroid] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (Platform.OS === "ios") {
      setIsIos(true);
    } else if (Platform.OS === "android") {
      setIsAndroid(true);
    }
  }, []);

  return {
    isIos, isAndroid
  }
}