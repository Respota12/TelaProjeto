import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo, Carlos 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
