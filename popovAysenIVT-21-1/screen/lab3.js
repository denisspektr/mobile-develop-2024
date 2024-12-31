import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function Lab3({ isDarkTheme, setIsDarkTheme }) {
  const [inputValue, setInputValue] = useState('');
  const [calculations, setCalculations] = useState([]);

  const handleCalculate = () => {
    const num = parseFloat(inputValue);

    if (isNaN(num)) {
      return;
    }

    const start = performance.now();
    const calcResult = (num ** 2 + 3 * num - 10) / 2;
    const end = performance.now();
    const timeTaken = end - start;

    setCalculations(prevState => [
      ...prevState,
      { input: inputValue, result: calcResult, time: timeTaken },
    ]);
  };

  const cachedResult = useMemo(() => {
    return calculations.find(calc => calc.input === inputValue);
  }, [inputValue, calculations]);

  const formattedTime = cachedResult ? cachedResult.time.toFixed(3) : '-';

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, isDarkTheme ? styles.darkText : styles.lightText]}>
        Формула: (число**2+3*число-10)/2
      </Text>

      <TextInput
        style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Введите число"
        placeholderTextColor={isDarkTheme ? '#ccc' : '#888'}
      />

      <TouchableOpacity
        style={[styles.button, isDarkTheme ? styles.darkButton : styles.lightButton]}
        onPress={handleCalculate}
      >
        <Text style={[styles.buttonText, isDarkTheme ? styles.darkText : styles.lightText]}>Вычислить</Text>
      </TouchableOpacity>

      <Text style={[styles.resultText, isDarkTheme ? styles.darkText : styles.lightText]}>
        {cachedResult ? `Результат: ${cachedResult.result}` : 'Результат: -'}
      </Text>

      

      <TouchableOpacity
        style={[styles.switchButton, isDarkTheme ? styles.darkButton : styles.lightButton]}
        onPress={() => setIsDarkTheme(!isDarkTheme)}
      >
        {}
        <Icon
          name={isDarkTheme ? "wb-sunny" : "nights-stay"} 
          size={30}
          color={isDarkTheme ? '#fff' : '#333'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#fff',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 18,
    borderRadius: 8,
  },
  darkInput: {
    backgroundColor: '#555',
    borderColor: '#aaa',
    color: '#fff',
  },
  lightInput: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    color: '#333',
  },
  resultText: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  lightButton: {
    backgroundColor: '#4CAF50',
  },
  darkButton: {
    backgroundColor: '#1E88E5',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  switchButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#333',
  },
});
