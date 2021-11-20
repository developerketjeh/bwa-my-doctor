import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICArrowGreyRight, ICFile, ICLanguage, ICProfile, ICRate } from '../../../assets';
import { colors, fonts } from '../../../utils';

const List = ({ profile, name, desc, type, onPress, icon }) => {
  const Icon = () => {
    switch (icon) {
      case 'profile':
        return <ICProfile />
      case 'language':
        return <ICLanguage />
      case 'rate':
        return <ICRate />
      case 'file':
        return <ICFile />
      default:
        return <ICProfile />
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.image} />}
      <View style={styles.wrapperTitle}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <ICArrowGreyRight />}
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  wrapperTitle: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize'
  },
})
