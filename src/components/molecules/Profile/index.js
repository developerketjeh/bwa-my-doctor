import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DMUser, ICFemale, ICMale, ICRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({ name, role, type, avatar, isRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={avatar ? { uri: avatar } : DMUser} style={styles.avatar} />
        {isRemove && <ICRemovePhoto style={styles.icon} />}
        {type === 'doctor-female' && <ICFemale style={styles.icon} />}
        {type === 'doctor-male' && <ICMale style={styles.icon} />}
      </View>
      {name ? <Text style={styles.name}>{name}</Text> : null}
      {role ? <Text style={styles.role}>{role}</Text> : null}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center'
  },
  role: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center'
  },
  icon: {
    position: 'absolute',
    bottom: 5,
    right: 0
  },
})
