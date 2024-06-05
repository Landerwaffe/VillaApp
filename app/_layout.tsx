import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StyleSheet, View, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemedText } from "@/components/ThemedText";
import React, { createContext, useState } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stacks = createNativeStackNavigator();

export const AuthContext = createContext("Register");

interface Props {
  // other props
  children?: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [access, setAccess] = React.useState<string>("Register");

  const passLogin = () => {
    setAccess("Login");
  };

  const passRegister = () => {
    setAccess("Register");
  };

  const passLoggedIn = () => {
    setAccess("loggedIn");
  };

  return (
    <AuthContext.Provider value={"Register"}>{children}</AuthContext.Provider>
  );
};

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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
