import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({ title, onPress, type, avatar, role }) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} title={title} type={role} avatar={avatar} />
  }
  return (
    <View style={styles.container(type)}>
      <Button icon={type === 'dark' ? "back-light" : "back-dark"} type="icon-only" onPress={onPress} />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0
  }),
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize'
  })
})
