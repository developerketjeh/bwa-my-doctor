import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../atoms';
import { colors, fonts } from '../../../utils';

const DarkProfile = ({ onPress, title, type, avatar }) => {
  return (
    <View style={styles.container}>
      <Button icon="back-light" type="icon-only" onPress={onPress} />
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.role}>{type}</Text>
      </View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  )
}

export default DarkProfile

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingVertical: 30,
    paddingLeft: 20,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  role: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: colors.text.role,
    fontFamily: fonts.primary[400],
    marginTop: 6,
    textTransform: 'capitalize'
  }
})
