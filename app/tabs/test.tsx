import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  PaperProvider,
  useTheme,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { useColorScheme } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

function TabThreeScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    planet: {
      width: "90%",
      height: "50%",
      margin: "auto",
    },
  });

  const darktheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      primary: "rgb(79, 216, 235)",
      onPrimary: "rgb(0, 54, 61)",
      primaryContainer: "rgb(0, 79, 88)",
      onPrimaryContainer: "rgb(151, 240, 255)",
      secondary: "rgb(161, 201, 255)",
      onSecondary: "rgb(0, 50, 91)",
      secondaryContainer: "rgb(0, 72, 128)",
      onSecondaryContainer: "rgb(211, 228, 255)",
      tertiary: "rgb(133, 207, 255)",
      onTertiary: "rgb(0, 52, 76)",
      tertiaryContainer: "rgb(0, 76, 108)",
      onTertiaryContainer: "rgb(199, 231, 255)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(25, 28, 29)",
      onBackground: "rgb(225, 227, 227)",
      surface: "rgb(25, 28, 29)",
      onSurface: "rgb(225, 227, 227)",
      surfaceVariant: "rgb(63, 72, 74)",
      onSurfaceVariant: "rgb(191, 200, 202)",
      outline: "rgb(137, 146, 148)",
      outlineVariant: "rgb(63, 72, 74)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(225, 227, 227)",
      inverseOnSurface: "rgb(46, 49, 50)",
      inversePrimary: "rgb(0, 104, 116)",
      elevation: {
        level0: "transparent",
        level1: "rgb(28, 37, 39)",
        level2: "rgb(29, 43, 46)",
        level3: "rgb(31, 49, 52)",
        level4: "rgb(32, 51, 54)",
        level5: "rgb(33, 54, 58)",
      },
      surfaceDisabled: "rgba(225, 227, 227, 0.12)",
      onSurfaceDisabled: "rgba(225, 227, 227, 0.38)",
      backdrop: "rgba(41, 50, 52, 0.4)",
    },
  };

  const lighttheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: "tomato",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(151, 240, 255)",
      onPrimaryContainer: "rgb(0, 31, 36)",
      secondary: "rgb(17, 96, 164)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(211, 228, 255)",
      onSecondaryContainer: "rgb(0, 28, 56)",
      tertiary: "rgb(0, 101, 143)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(199, 231, 255)",
      onTertiaryContainer: "rgb(0, 30, 46)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(250, 253, 253)",
      onBackground: "rgb(25, 28, 29)",
      surface: "rgb(250, 253, 253)",
      onSurface: "rgb(25, 28, 29)",
      surfaceVariant: "rgb(219, 228, 230)",
      onSurfaceVariant: "rgb(63, 72, 74)",
      outline: "rgb(111, 121, 122)",
      outlineVariant: "rgb(191, 200, 202)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(46, 49, 50)",
      inverseOnSurface: "rgb(239, 241, 241)",
      inversePrimary: "rgb(79, 216, 235)",
      elevation: {
        level0: "transparent",
        level1: "rgb(238, 246, 246)",
        level2: "rgb(230, 241, 242)",
        level3: "rgb(223, 237, 238)",
        level4: "rgb(220, 235, 237)",
        level5: "rgb(215, 232, 234)",
      },
      surfaceDisabled: "rgba(25, 28, 29, 0.12)",
      onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
      backdrop: "rgba(41, 50, 52, 0.4)",
    },
  };

  const lightordark =
    colorScheme === "dark" ? (
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          margin: "auto",
          backgroundColor: darktheme.colors.primary,
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
          This is Dark Mode.
        </ThemedText>
        <ThemedText
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 25,
            paddingLeft: "8.4%",
          }}
        >
          The moon waxes.
        </ThemedText>
        <Image
          source={require("@/assets/images/moon.jpg")}
          style={styles.planet}
        />
        <Card style={{ width: "90%", margin: "auto" }}>
          <Card.Title
            title="Villa"
            subtitle="Bahamas"
            //left={LeftContent}
          />
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={{ height: "100%", width: "90%", margin: "auto" }}
          />
          <Card.Content>
            <Title>Details</Title>
            <Paragraph>
              A villa was originally a style of house built for the upper
              classes in ancient Rome. This style of architecture has been kept
              and adapted upon. The villas in Italy have gradually evolved into
              luxurious houses. Today, the word villa can refer to many types
              and sizes of houses around the world. A villa is a type of house
              that was originally an ancient Roman upper-class country house.
              Since its origins in the Roman villa, the idea and function of a
              villa has evolved considerably.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          margin: "auto",
          backgroundColor: lighttheme.colors.primary,
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
          This is Light Mode.
        </ThemedText>
        <ThemedText
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 25,
            paddingLeft: "8.4%",
          }}
        >
          Day Breaks.
        </ThemedText>
        <Image
          source={require("@/assets/images/sun.jpg")}
          style={styles.planet}
        />
        <Card style={{ width: "90%", margin: "auto" }}>
          <Card.Title
            title="Villa"
            subtitle="Bahamas"
            //left={LeftContent}
          />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Content>
            <Title>Details</Title>
            <Paragraph>
              A villa was originally a style of house built for the upper
              classes in ancient Rome. This style of architecture has been kept
              and adapted upon. The villas in Italy have gradually evolved into
              luxurious houses. Today, the word villa can refer to many types
              and sizes of houses around the world. A villa is a type of house
              that was originally an ancient Roman upper-class country house.
              Since its origins in the Roman villa, the idea and function of a
              villa has evolved considerably.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    );

  return lightordark;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <TabThreeScreen />
    </SafeAreaProvider>
  );
}
