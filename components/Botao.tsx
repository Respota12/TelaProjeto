import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNEButton } from '@rneui/themed';
import { IconNode } from '@rneui/base';
import { COLORS } from '../src/theme/colors';

interface BotaoProps {
  title: string;
  icon?: IconNode;
  onPress: () => void;
  type?: 'solid' | 'clear' | 'outline'; // tipos válidos para o botão
}

export default function Botao({ title, icon, onPress, type = 'outline' }: BotaoProps) {
  return (
    <RNEButton
      title={title}
      icon={icon}
      type={type}
      buttonStyle={styles.button}
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.accent,
    borderWidth: 1.5,
    borderRadius: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
    marginVertical: 8,
  },
  title: {
    color: COLORS.text,
    fontWeight: '700',
    marginLeft: 6,
  },
});
