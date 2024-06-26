import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  GestureResponderEvent,
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
let CardID: Number[] = [];
let DETAILS: JSX.Element[] = [];

const url = new URL("http://192.168.1.15:8080");

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

  const [detailClick, setDetailClick] = React.useState(false);
  const [detailRender, setDetailRender] = React.useState<Number>(13);

  const handleDetailClick = (id: Number) => {
    setDetailRender(id);
    setDetailClick(true);
  };

  const handleDetailBack = () => {
    setDetailClick(false);
  };

  function createCard(
    title: string,
    subtitle: string,
    image: string,
    description: string,
    clickID: Number
  ) {
    CARDS.push(
      <Card
        onPress={(id) => handleDetailClick(clickID)}
        style={{ margin: "auto", width: "100%" }}
      >
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

  function identifyCard(id: Number) {
    CardID.push(id);
  }

  function createDetails(
    id: Number,
    detailimage: string,
    detaildescription: string
  ) {
    DETAILS.push(
      <Card style={{ margin: "auto", width: "100%" }}>
        <Card.Title
          title="Detailed View"
          //subtitle={subtitle}
          //left={LeftContent}
        />
        <Card.Cover
          source={{ uri: detailimage }}
          style={{ margin: "auto", width: "80%" }}
        />
        <Card.Content>
          <Title>Description</Title>
          <Paragraph>{detaildescription}</Paragraph>
          <Paragraph>{id.toString()}</Paragraph>
        </Card.Content>
      </Card>
    );
  }

  async function call() {
    url.searchParams.set("type", "Flatlist");
    const result = await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (searchQuery == "") {
          CARDS.length = 0;
          for (let i = 0; i < response.length; i++) {
            console.log("Flatlist Length is: " + response.length);
            createCard(
              response[i].name,
              response[i].subtitle,
              response[i].image,
              response[i].description,
              response[i].id
            );
            identifyCard(response[i].id);
          }
        } else {
          CARDS.length = 0;
          for (let i = 0; i < response.length; i++) {
            if (response[i].name.includes(searchQuery)) {
              createCard(
                response[i].name,
                response[i].subtitle,
                response[i].image,
                response[i].description,
                response[i].id
              );
              identifyCard(response[i].id);
            }
          }
        }
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }

  async function callDetails(queryID: Number) {
    url.searchParams.set("type", "Details");
    url.searchParams.set("id", queryID.toString());
    const detailResult = await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          console.log("Starting Loop with length: " + response.length);
          if (response[i].propertyid == queryID.toString()) {
            console.log("Condition Matched!");
            createDetails(
              response[i].propertyid,
              response[i].detailimage,
              response[i].detaildescription
            );
            DETAILS = [];
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (detailClick == false) {
    call();
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
  } else {
    callDetails(detailRender);
    return (
      <View
        style={{ backgroundColor: "tomato", flex: 1, justifyContent: "center" }}
      >
        <ThemedText
          style={{
            fontFamily: "Inter-Black",
            fontSize: 30,
            paddingTop: "20%",
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
          Nuts and Bolts
        </ThemedText>
        <FlatList
          data={DETAILS}
          renderItem={({ item }) => <Card>{item}</Card>}
          //keyExtractor={(item) => item}
        />
        <Button onPress={handleDetailBack}>Back</Button>
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
