import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function RelatorioScreen() {
  const progresso = 0.75;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progresso semanal</Text>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${progresso * 100}%` }]} />
      </View>
      <Text>{Math.round(progresso * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: COLORS.white, flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  bar: { height: 20, backgroundColor: '#ddd', borderRadius: 10 },
  fill: { height: 20, backgroundColor: COLORS.accent, borderRadius: 10 },
});
