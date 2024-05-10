import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import Animated from "react-native-reanimated";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        margin: "auto",
      }}
    >
      <ThemedText
        style={{ fontFamily: "Inter-Black", fontSize: 30, paddingTop: "3%" }}
      >
        Content is in safe area.
      </ThemedText>
      <ThemedText style={{ fontFamily: "Inter-Regular", fontSize: 25 }}>
        Regular Text TETTT
      </ThemedText>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
