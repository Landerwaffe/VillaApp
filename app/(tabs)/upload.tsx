import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "react-native-paper";
import * as React from "react";
import { TextInput } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

let once = 0;

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [text, setText] = React.useState("");

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
        Uploading a listing.
      </ThemedText>
      <ThemedText
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 25,
          paddingLeft: "8.4%",
        }}
      >
        Taking user input
      </ThemedText>
      <TextInput
        label="Name"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{
          marginTop: "8.4%",
        }}
      />
      <TextInput
        label="Subtitle"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Image"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Description"
        value={text}
        onChangeText={(text) => setText(text)}
      />
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
