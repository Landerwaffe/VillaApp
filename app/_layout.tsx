import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StyleSheet, View, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stacks = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </NavigationContainer>
  );
}

const DetailsScreen = () => {
  return (
    <View>
      <ThemedText>Details Screen</ThemedText>
    </View>
  );
};
