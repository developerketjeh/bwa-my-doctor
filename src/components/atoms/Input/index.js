import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Input = ({ label, value, onChangeText, isPassword, disable }) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary)
  }
  const onBlurForm = () => {
    setBorder(colors.border)
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput secureTextEntry={isPassword} onFocus={onFocusForm} onBlur={onBlurForm} style={styles.input(border)} value={value} onChangeText={onChangeText} editable={!disable} selectTextOnFocus={!disable} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    marginBottom: 6
  }
})
