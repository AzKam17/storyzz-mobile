import { Navigation } from "@/navigators/root.navigator";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { defaultConfig } from "@tamagui/config/v4";
import * as SplashScreen from "expo-splash-screen";
//4.1.2
import { TamaguiProvider, createTamagui } from "tamagui";
import {
  RedHatDisplay_500Medium,
  RedHatDisplay_900Black,
  RedHatDisplay_700Bold,
  RedHatDisplay_400Regular,
  RedHatDisplay_300Light,
  useFonts,
} from "@expo-google-fonts/red-hat-display";
import {
  RedHatText_400Regular,
  RedHatText_600SemiBold,
  RedHatText_500Medium,
  RedHatText_700Bold,
} from "@expo-google-fonts/red-hat-text";
import Toast, { ToastConfig } from "react-native-toast-message";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { KeyboardProvider } from "react-native-keyboard-controller";
import {SuccessRegisterToastView} from '@/ui/views/toast'

const config = createTamagui(defaultConfig);

const toastConfig: ToastConfig = {
  // @ts-ignore
  successRegisterProgram: (props) => <SuccessRegisterToastView {...props} />, 
};

export default function App() {
  const [loaded, error] = useFonts({
    RedHatText_400Regular,
    RedHatText_600SemiBold,
    RedHatDisplay_900Black,
    RedHatText_500Medium,
    RedHatText_700Bold,
    RedHatDisplay_500Medium,
    RedHatDisplay_700Bold,
    RedHatDisplay_400Regular,
    RedHatDisplay_300Light,
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
    <KeyboardProvider>
      <TamaguiProvider config={config}>
        <GestureHandlerRootView style={styles.container}>
          <SafeAreaProvider>
            <BottomSheetModalProvider>
              <Navigation />
              <Toast position="bottom" config={toastConfig} />
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </TamaguiProvider>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
