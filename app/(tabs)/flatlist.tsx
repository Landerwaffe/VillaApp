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
import { Card, Title, Paragraph } from "react-native-paper";
import { JSX } from "react";
import { Searchbar } from "react-native-paper";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "expo-router";

let CARDS: JSX.Element[] = [];

let detailId = "404";

export function createCard(
  title: string,
  subtitle: string,
  image: string,
  description: string
) {
  return CARDS.push(
    <Card id="1" style={{ margin: "auto", width: "100%" }}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        //left={LeftContent}
      />
      <Card.Cover
        source={{ uri: image }}
        style={{ margin: "auto", width: "80%" }}
      />
      <Card.Content>
        <Title
          onPress={() => {
            console.log("You tapped the button!");
          }}
        >
          Details
        </Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
}

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

function UploadScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");
  if (searchQuery != "") {
    console.log("Search Query is: " + searchQuery);
  }

  const result = fetch("http://192.168.1.15:8080")
    .then((response) => response.json())
    .then((response) => {
      if (searchQuery == "") {
        CARDS.length = 0;
        for (let i = 0; i < response.length; i++) {
          detailId = response[i].id;
          createCard(
            response[i].name,
            response[i].subtitle,
            response[i].image,
            response[i].description
          );
        }
      } else {
        CARDS.length = 0;
        for (let i = 0; i < response.length; i++) {
          if (response[i].name.includes(searchQuery)) {
            createCard(
              response[i].name,
              response[i].subtitle,
              response[i].image,
              response[i].description
            );
          }
        }
      }
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error(error);
    });

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
        This is a list of items.
      </ThemedText>
      <ThemedText
        style={{
          fontFamily: "Inter-Regular",
          fontSize: 25,
          paddingLeft: "8.4%",
        }}
      >
        Infinitely scrollable
      </ThemedText>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={CARDS}
        renderItem={({ item }) => <Card>{item}</Card>}
        //keyExtractor={(item) => item}
      />
    </View>
  );
}

export default function App() {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <UploadScreen />
    </SafeAreaProvider>
  );
}
