import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function App({}) {
  return (
    <View style={{ backgroundColor: "tomato", flex: 1 }}>
      <ThemedText
        style={{
          fontFamily: "Inter-Black",
          fontSize: 30,
          paddingTop: "3%",
          textAlign: "center",
        }}
      >
        This is details.
      </ThemedText>
      <ThemedText
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 25,
          paddingTop: "0.5%",
          textAlign: "center",
        }}
      >
        Nitty gritty
      </ThemedText>
    </View>
  );
}
