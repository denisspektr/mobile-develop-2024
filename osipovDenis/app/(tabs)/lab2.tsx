import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]);

  const [nextChar, setNextChar] = useState(1);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
      console.log(res);
      console.log(characters);
    });
  }, []);

  function NextFunc(val) {
    if (val == 20) {
      setNextChar(1);
    } else {
      setNextChar(nextChar + 1);
    }
  }

  function PrevFunc(val) {
    if (val == 1) {
      setNextChar(20);
    } else {
      setNextChar(nextChar - 1);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, display: "flex" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 20 }}>
          {characters[nextChar - 1]?.name}
        </Text>

        <Image
          style={styles.image}
          source={{ uri: characters[nextChar - 1]?.image }}
        />

        <TouchableOpacity
          onPress={() => {
            PrevFunc(nextChar);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Предыдущий</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            NextFunc(nextChar);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Следующий</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>
          Персонаж №{characters[nextChar - 1]?.id}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
});
