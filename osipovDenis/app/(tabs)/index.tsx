import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const colors: string[] = ["black", "red", "blue", "green", "yellow", "purple"];
const colorsText: string[] = [
  "Черный",
  "Красный",
  "Синий",
  "Зелёный",
  "Жёлтый",
  "Фиолетовый",
];
export default function HomeScreen() {
  const [colorIndex, setColorIndex] = useState(0);
  const [boxSize, setBoxSize] = useState(100);

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const [displayText, setDisplayText] = useState(colorsText[0]);

  return (
    <SafeAreaView style={{ flex: 1, display: "flex" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: colors[colorIndex],
            width: boxSize,
            height: boxSize,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setColorIndex((colorIndex + 1) % colors.length);
            setDisplayText(colorsText[(colorIndex + 1) % colors.length]);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Поменяй цвет</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBoxSize(randomInt(100, 150));
          }}
          style={{
            backgroundColor: "yellow",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Поменяй размер</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>Текущий цвет - {displayText}</Text>
      </View>
    </SafeAreaView>
  );
}
