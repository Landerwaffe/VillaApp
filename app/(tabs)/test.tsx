import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import {
  PaperProvider,
  useTheme,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { useColorScheme } from "react-native";

function TabThreeScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        margin: "auto",
        backgroundColor: "tomato",
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
        Regular Text Tab Three
      </ThemedText>
    </View>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  const usingTheme = useTheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...DefaultTheme, backgroundColor: "red" }
      : { ...DefaultTheme, backgroundColor: "blue" };

  //const string = "String";

  console.log("The theme is: " + theme.colors.primary);
  console.log(theme);

  return (
    <SafeAreaProvider>
      <TabThreeScreen />
    </SafeAreaProvider>
  );
}
