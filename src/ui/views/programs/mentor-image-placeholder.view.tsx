import React from "react";
import { Image } from "expo-image";

export const MenImagePlaceholder = React.memo(function ({size = 100}: {size?: number}) {
  return (
    <Image
      source={require("~/images/default-image-men.png")}
      style={{ width: size, height: size, borderRadius: 100 }}
    />
  );
});

export const WomenImagePlaceholder = React.memo(function ({size = 100}: {size?: number}) {
  return (
    <Image
      source={require("~/images/default-image-women.png")}
      style={{ width: size, height: size, borderRadius: 100 }}
    />
  );
});