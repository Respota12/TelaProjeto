import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function HabitosScreen() {
  const [agua, setAgua] = useState(false);
  const [caminhada, setCaminhada] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Hábitos</Text>
      <View style={styles.item}>
        <Text>Beber água</Text>
        <Switch value={agua} onValueChange={setAgua} />
      </View>
      <View style={styles.item}>
        <Text>Caminhar 30min</Text>
        <Switch value={caminhada} onValueChange={setCaminhada} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: COLORS.bg, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
