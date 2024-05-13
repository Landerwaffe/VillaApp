import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PaperProvider, useTheme } from "react-native-paper";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  console.log(theme);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        margin: "auto",
        backgroundColor: theme.colors.primary,
        width: "100%",
      }}
    >
      <ThemedText
        style={{
          fontFamily: "Inter-Black",
          fontSize: 30,
          paddingTop: "3%",
          paddingLeft: "8.4%",
        }}
      >
        Content is in safe area.
      </ThemedText>
      <ThemedText
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 25,
          paddingLeft: "8.4%",
        }}
      >
        Regular Text
      </ThemedText>
    </View>
  );
}

export default function App() {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
