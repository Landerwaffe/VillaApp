import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
          Inter Black Font
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
