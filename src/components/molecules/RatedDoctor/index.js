import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

const RatedDoctor = ({ role, doctorName, onPress, avatar }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <View>
          <Text style={styles.name}>{doctorName}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>
      <View style={styles.star}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </TouchableOpacity>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  profile: {
    flex: 1
  },
  star: {
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  role: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize'
  }
})
