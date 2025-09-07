import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../theme/colors';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
});

export default function CadastroScreen() {
  return (
    <Formik
      initialValues={{ nome: '', email: '' }}
      validationSchema={schema}
      onSubmit={(values) => alert(`Bem-vindo, ${values.nome}!`)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('nome')}
            onBlur={handleBlur('nome')}
            value={values.nome}
          />
          {touched.nome && errors.nome && <Text style={styles.error}>{errors.nome}</Text>}

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Button title="Clique aqui" onPress={() => alert('Você clicou!')} />

        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: COLORS.white, flex: 1 },
  label: { fontWeight: 'bold', color: COLORS.text },
  input: { borderWidth: 1, borderColor: COLORS.accent, padding: 10, marginBottom: 10 },
  error: { color: 'red', fontSize: 12 },
});
