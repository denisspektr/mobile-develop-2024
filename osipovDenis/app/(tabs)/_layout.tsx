import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Entypo from "@expo/vector-icons/Entypo";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import * as Font from "expo-font";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Inter: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerStyle: {
            backgroundColor: "#2A4758",
            height: 59,
          },
          tabBarStyle: {
            height: 70,
            borderRadius: 50,
            backgroundColor: "#2A4758",
            margin: 14,
            marginBottom: 30,
          },
        }}
      >
        <Tabs.Screen
          name="lab1"
          options={{
            title: "Lab1",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="lab-flask" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="lab2"
          options={{
            title: "Lab2",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="lab-flask" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="lab3"
          options={{
            title: "Lab3",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="lab-flask" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="lab4"
          options={{
            title: "Lab4",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="lab-flask" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="lab4_2"
          options={{
            title: "Lab4_2",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="lab-flask" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "#000000",
  },
  icon: {
    width: 42,
    height: 42,
    marginBottom: 9,
    marginTop: 9,
    color: "#000000",
  },
  headerTab: {
    backgroundColor: "#CFE2F9",
    height: 100,
  },
  tabBar: {
    height: 60,
    backgroundColor: "#CFE2F9",
    paddingTop: 6,
    paddingBottom: 6,
    borderTopWidth: 0.5,
    borderTopColor: "#000000",
  },
});
