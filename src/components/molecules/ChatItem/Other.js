import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Other = ({ message, time, photo }) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 16,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  message: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12
  },
})
