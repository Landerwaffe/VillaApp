import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, margin: "auto", width: "50%" }}
    >
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
        Content is in safe area.
      </Text>
      <Text>Text</Text>
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
