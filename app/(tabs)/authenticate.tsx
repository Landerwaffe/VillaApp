import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  DefaultTheme,
  Paragraph,
  Title,
  useTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { AuthContext } from "../_layout";

function UploadScreen() {
  const theme = useTheme();

  const url = new URL("http://192.168.1.15:8080");

  //const [access, setAccess] = React.useState<string>("Register");

  const access = useContext(AuthContext);
  const { passLogin, passRegister, passLoggedin } = useContext(AuthContext);

  // const passLogin = () => {
  //   setAccess("Login");
  // };

  // const passRegister = () => {
  //   setAccess("Register");
  // };

  // const passLoggedIn = () => {
  //   setAccess("loggedIn");
  // };

  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    scrollViewStyle: {
      flex: 1,
      padding: 15,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      paddingBottom: "10%",
    },
    headingStyle: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 40,
    },
  });
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  if (access == "Register") {
    return (
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <ThemedText
            style={{
              fontFamily: "Inter-Black",
              fontSize: 30,
              paddingTop: "3%",
              textAlign: "center",
            }}
          >
            Registering a new user.
          </ThemedText>
          <ThemedText
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 25,
              paddingTop: "0.5%",
              textAlign: "center",
            }}
          >
            User authentication
          </ThemedText>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: "email",
                name: "email",

                rules: {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                },
                textInputProps: {
                  label: "Email",
                },
              },
              {
                type: "password",
                name: "password",
                rules: {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                },
                textInputProps: {
                  label: "Password",
                },
              },
            ]}
          />
          <Button
            mode={"contained"}
            onPress={handleSubmit((data: any) => {
              url.searchParams.set("type", "Register");
              console.log("form data", data);
              const response = fetch(url, {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => console.log(JSON.stringify(data)))
                .catch((error) => {
                  console.error(error);
                });
            })}
            style={{ backgroundColor: darktheme.colors.secondary }}
          >
            Submit
          </Button>
          <Button
            mode={"contained"}
            onPress={passLogin}
            style={{
              backgroundColor: darktheme.colors.secondary,
              marginTop: "0.5%",
            }}
          >
            Already registered? Login here
          </Button>
        </ScrollView>
      </View>
    );
  } else if (access == "Login") {
    return (
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <ThemedText
            style={{
              fontFamily: "Inter-Black",
              fontSize: 30,
              paddingTop: "3%",
              textAlign: "center",
            }}
          >
            Logging in existing user.
          </ThemedText>
          <ThemedText
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 25,
              paddingTop: "0.5%",
              textAlign: "center",
            }}
          >
            User authentication
          </ThemedText>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: "email",
                name: "email",

                rules: {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                },
                textInputProps: {
                  label: "Email",
                },
              },
              {
                type: "password",
                name: "password",
                rules: {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                },
                textInputProps: {
                  label: "Password",
                },
              },
            ]}
          />
          <Button
            mode={"contained"}
            onPress={handleSubmit((data: any) => {
              url.searchParams.set("type", "Login");
              console.log("Form data: " + data);
              const userdata = fetch(url, {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.text())
                .then((JSONResponse) => {
                  console.log(JSON.stringify(data));
                  console.log("Response data:", JSON.stringify(JSONResponse)); // Print the response data
                  passLoggedIn();
                })

                .catch((error) => {
                  console.error(error);
                });
            })}
            style={{ backgroundColor: darktheme.colors.secondary }}
          >
            Login
          </Button>
          <Button
            mode={"contained"}
            onPress={passRegister}
            style={{
              backgroundColor: darktheme.colors.secondary,
              marginTop: "0.5%",
            }}
          >
            Need to register?
          </Button>
        </ScrollView>
      </View>
    );
  } else if (access == "loggedIn") {
    return (
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <ThemedText
            id="TitleText"
            style={{
              fontFamily: "Inter-Black",
              fontSize: 30,
              paddingTop: "10%",
              paddingLeft: "8.4%",
            }}
            // onPress={(id) => handleDetailClick(1)}
          >
            User Profile.
          </ThemedText>
          <ThemedText
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 25,
              paddingTop: "0.5%",
              paddingLeft: "8.4%",
              paddingBottom: "4%",
            }}
          >
            Personalized Content
          </ThemedText>
          <Card
            // onPress={(id) => handleDetailClick(clickID)}
            style={{
              margin: "auto",
              width: "100%",
              height: "100%",
            }}
          >
            <Card.Title
              title="User Profile"
              subtitle="Personalized Content"
              //left={LeftContent}
            />
            <Card.Cover
              //source={{ uri: image }}
              style={{ margin: "auto", width: "80%" }}
            />
            <Card.Content>
              <Title>Details</Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default function App() {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <UserProvider>
        <UploadScreen />
      </UserProvider>
    </SafeAreaProvider>
  );
}

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
