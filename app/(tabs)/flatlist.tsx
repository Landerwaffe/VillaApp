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
import { Button, useTheme } from "react-native-paper";
import { Card, Title, Paragraph } from "react-native-paper";
import { JSX } from "react";
import { Searchbar } from "react-native-paper";
import * as React from "react";

let CARDS: JSX.Element[] = [];

let click = false;

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
        <Title>Details</Title>
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

function ListScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");
  if (searchQuery != "") {
    console.log("Search Query is: " + searchQuery);
  }

  //let a = "Return Value";

  const [detailClick, setDetailClick] = React.useState(false);
  const [a, setA] = React.useState("Return Value");

  const setRender = (value: string) => {
    setA(value);
  };

  const handleDetailClick = () => {
    setRender("Altered Value");
    console.log(a);
    setDetailClick(true);
  };

  console.log("After handle detail, state becomes: " + detailClick);

  const result = fetch("http://192.168.1.15:8080")
    .then((response) => response.json())
    .then((response) => {
      if (searchQuery == "") {
        CARDS.length = 0;
        for (let i = 0; i < response.length; i++) {
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

  if (detailClick == false) {
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
          id="TitleText"
          style={{
            fontFamily: "Inter-Black",
            fontSize: 30,
            paddingTop: "3%",
            paddingLeft: "8.4%",
          }}
          onPress={handleDetailClick}
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
          renderItem={({ item }) => (
            <Card onPress={handleDetailClick}>{item}</Card>
          )}
          //keyExtractor={(item) => item}
        />
      </View>
    );
  } else {
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
          {a}
        </ThemedText>
      </View>
    );
  }
}

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <ListScreen />
    </SafeAreaProvider>
  );
}
