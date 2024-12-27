import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function SumCalculator() {
  const { isDarkTheme } = useTheme();
  const [input, setInput] = useState('');

  const sum = useMemo(() => {
    console.log('Подсчитываем сумму чисел...');
    return input.split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num))
      .reduce((acc, curr) => acc + curr, 0);
  }, [input]);

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, isDarkTheme ? styles.darkText : styles.lightText]}>
        Введите числа через запятую:
      </Text>
      <TextInput
        style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}
        value={input}
        onChangeText={(newText) => setInput(newText)}
        placeholder="Например: 1, 3"
        placeholderTextColor={isDarkTheme ? '#aaa' : '#888'}
      />
      <Text style={[styles.sum, isDarkTheme ? styles.darkText : styles.lightText]}>
        Сумма чисел: {sum}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  lightContainer: {
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  darkText: {
    color: '#EAEAEA',
  },
  lightText: {
    color: '#333333',
  },
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  darkInput: {
    borderColor: '#444',
    backgroundColor: '#2A2A2A',
    color: '#EAEAEA',
  },
  lightInput: {
    borderColor: '#DDD',
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  sum: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
