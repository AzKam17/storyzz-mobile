import { RedHatDisplay_900Black } from "@expo-google-fonts/red-hat-display";
import {
  RedHatText_400Regular,
  RedHatText_500Medium,
  RedHatText_600SemiBold,
  RedHatText_700Bold,
} from "@expo-google-fonts/red-hat-text";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { defaultConfig } from "@tamagui/config/v4";
import { useEffect } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";

const config = createTamagui(defaultConfig);

export default function Root() {
  return <RootNavigator />;
}

function RootNavigator() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    RedHatText_400Regular,
    RedHatText_600SemiBold,
    RedHatDisplay_900Black,
    RedHatText_500Medium,
    RedHatText_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Protected guard={true}>
            <Stack.Screen name="sign-up" />
          </Stack.Protected>

          <Stack.Protected guard={false}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack.Protected>
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
