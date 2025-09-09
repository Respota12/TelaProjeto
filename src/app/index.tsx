import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../theme/colors';

export default function Index() {

  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/vetores-premium/saude-e-interface-do-usuario-do-aplicativo-movel-medico_10051029.jpg' }}
      style={styles.fundo}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}> Novo Dia</Text>
        <Text style={styles.subtitulo}>Seu app de saúde e bem-estar</Text>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
          <Text style={styles.botaoTexto}>Começar</Text>
        </TouchableOpacity>

        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={styles.link}>Criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.link}>Já tenho conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/logado/dashboard')}>
            <Text style={styles.link}>Explorar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 30,
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  opcoes: {
    gap: 12,
    alignItems: 'center',
  },
  link: {
    color: COLORS.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
