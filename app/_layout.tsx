import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  useTheme,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

//import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, View, useColorScheme } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const theme = useTheme();
  const [loaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
  });

  const linking = {
    prefixes: ["villa://"],
    config: {
      screens: {
        Home: "",
        Details: "details/:itemId",
      },
    },
  };

  const colorScheme = useColorScheme();
  // const paperTheme =
  //   colorScheme === "dark"
  //     ? { MD3DarkTheme, colors: theme.dark }
  //     : { MD3LightTheme, colors: theme.light };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer linking={linking} independent={true}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NavigationContainer>
  );
}
