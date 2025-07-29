import { Navigation } from "@/navigators/root.navigator";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { defaultConfig } from "@tamagui/config/v4";
import * as SplashScreen from "expo-splash-screen";

import { TamaguiProvider, createTamagui } from "tamagui";
import {
  RedHatDisplay_900Black,
  useFonts,
} from "@expo-google-fonts/red-hat-display";
import {
  RedHatText_400Regular,
  RedHatText_600SemiBold,
  RedHatText_500Medium,
  RedHatText_700Bold,
} from "@expo-google-fonts/red-hat-text";
import Toast from "react-native-toast-message";

const config = createTamagui(defaultConfig);

export default function App() {
  const [loaded, error] = useFonts({
    RedHatText_400Regular,
    RedHatText_600SemiBold,
    RedHatDisplay_900Black,
    RedHatText_500Medium,
    RedHatText_700Bold,
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <Navigation />
          <Toast position="bottom" />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
