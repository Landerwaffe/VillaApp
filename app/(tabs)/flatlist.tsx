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
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { ReactElement, JSXElementConstructor, ReactNode, JSX } from "react";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "First Item",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
  {
    id: "10",
    title: "First Item",
  },
  {
    id: "11",
    title: "Second Item",
  },
  {
    id: "12",
    title: "Third Item",
  },
  {
    id: "13",
    title: "First Item",
  },
  {
    id: "14",
    title: "Second Item",
  },
  {
    id: "15",
    title: "Third Item",
  },
  {
    id: "16",
    title: "First Item",
  },
  {
    id: "17",
    title: "Second Item",
  },
  {
    id: "18",
    title: "Third Item",
  },
  {
    id: "19",
    title: "First Item",
  },
  {
    id: "20",
    title: "Second Item",
  },
  {
    id: "21",
    title: "Third Item",
  },
  {
    id: "22",
    title: "First Item",
  },
  {
    id: "23",
    title: "Second Item",
  },
  {
    id: "24",
    title: "Twenty Fourth Item",
  },
  {
    id: "25",
    title: "First Item",
  },
  {
    id: "26",
    title: "Second Item",
  },
  {
    id: "27",
    title: "Third Item",
  },
  {
    id: "28",
    title: "First Item",
  },
  {
    id: "29",
    title: "Second Item",
  },
  {
    id: "30",
    title: "Third Item",
  },
];

let CARDS: JSX.Element[] = [];

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

createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard(
  "House",
  "Suburban",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "It's a house"
);
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");
createCard("Apartment", "District", "https://picsum.photos/700", "It's a box");

type ItemProps = { title: string };

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

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  console.log(theme);
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
      <HomeScreen />
    </SafeAreaProvider>
  );
}
