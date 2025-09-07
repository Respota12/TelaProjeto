import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { COLORS } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DailyFit</Text>
      <Text style={styles.subtitle}>Seu companheiro de bem-estar</Text>
      <Button title="Hábitos" onPress={() => navigation.navigate('Hábitos')} />
      <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      <Button title="Relatório" onPress={() => navigation.navigate('Relatório')} />
      <Button title="Home" onPress={ () => navigation.navigate('Home')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.text },
  subtitle: { fontSize: 16, color: COLORS.text, marginBottom: 20 },
});
