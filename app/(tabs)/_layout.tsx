import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  //For detecting dark or light mode
  //console.log("It's: " + colorScheme);

  const example = colorScheme === "dark" ? "DARK" : "LIGHT";

  const lightordark =
    colorScheme === "dark" ? (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="flatlist"
          options={{
            title: "Listings",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "search" : "search-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            title: "Upload",
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "image" : "image-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="authenticate"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="details"
          options={{
            title: "You can't see me",
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "star" : "star-outline"}
                color={color}
              />
            ),
          }}
        /> */}
      </Tabs>
    ) : (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="flatlist"
          options={{
            title: "Listings",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "search" : "search-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            title: "Upload",
            href: null,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "image" : "image-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="authenticate"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    );

  return lightordark;
}
