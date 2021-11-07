import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ILPhotoNull } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HomeProfile = ({ onPress, user }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={user.photo ? { uri: user.photo } : ILPhotoNull} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.role}>{user.profession}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize'
  },
  role: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textTransform: 'capitalize'
  }
})
