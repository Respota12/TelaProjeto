import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TelaFinanceira() {
  const valorHoje = 'R$ 500';
  const transacoes = [
    { id: '1', nome: 'Pizza', valor: 'R$ 30', data: '20/01/2020' },
    { id: '2', nome: 'Coca-Cola', valor: 'R$ 10', data: '20/01/2020' },
  ];

  return (
    <View style={styles.container}>
      {/* Parte superior vermelha */}
      <View style={styles.topo}>
        <Text style={styles.saudacao}>Bem-vindo, Carlos</Text>
        <Text style={styles.gasto}>Você gastou hoje</Text>
        <Text style={styles.valor}>{valorHoje}</Text>

        <Text style={styles.periodoLabel}>ESCOLHER PERÍODO</Text>
        <View style={styles.periodoBotoes}>
          <BotaoPeriodo texto="Hoje" />
          <BotaoPeriodo texto="Essa Semana" />
          <BotaoPeriodo texto="Esse Mês" />
        </View>
      </View>

      {/* Parte inferior branca */}
      <View style={styles.base}>
        <View style={styles.iconeContainer}>
          <IconeCategoria nome="airplane" />
          <IconeCategoria nome="home" />
          <IconeCategoria nome="silverware-fork-knife" />
          <IconeCategoria nome="car" />
          <IconeCategoria nome="tools" />
        </View>

        <FlatList
          data={transacoes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.transacoesContainer}
          renderItem={({ item }) => (
            <View style={styles.transacaoOval}>
              <Text style={styles.transacaoTexto}>
                {item.nome} • {item.valor} • {item.data}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

function BotaoPeriodo({ texto }) {
  return (
    <TouchableOpacity style={styles.botaoPeriodo}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

function IconeCategoria({ nome }) {
  return (
    <View style={styles.iconeItem}>
      <Icon name={nome} size={30} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    flex: 1,
    backgroundColor: '#E54B4B',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  saudacao: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 70,
    alignSelf: 'center',
  },
  gasto: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 60,
  },
  periodoLabel: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  periodoBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botaoPeriodo: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  textoBotao: {
    color: '#E54B4B',
    fontWeight: 'bold',
    fontSize: 14,
  },
  iconeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  iconeItem: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
  transacoesContainer: {
    paddingBottom: 25,
  },
  transacaoOval: {
    backgroundColor: '#F0F0F0',
    borderRadius: 80,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  transacaoTexto: {
    fontSize: 18,
    color: '#333',
  },
});
