import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AppRegistry } from "react-native";
import { PaperProvider, useTheme } from "react-native-paper";

function TabThreeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        margin: "auto",
        backgroundColor: theme.colors.error,
      }}
    >
      <ThemedText
        style={{ fontFamily: "Inter-Black", fontSize: 30, paddingTop: "3%" }}
      >
        Content is in safe area.
      </ThemedText>
      <ThemedText style={{ fontFamily: "Inter-Regular", fontSize: 25 }}>
        Regular Text Tab Three
      </ThemedText>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <TabThreeScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
