import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ILPhotoNull } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import { Firebase } from '../../config';
import { colors, getData, showError } from '../../utils';

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    photo: '',
    fullName: '',
    profession: ''
  });

  useEffect(() => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }, []);

  const signOut = () => {
    Firebase.auth().signOut()
      .then(() => {
        navigation.replace('GetStarted')
      })
      .catch(err => {
        showError(err.message)
      })
  }

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile avatar={user.photo ? { uri: user.photo } : ILPhotoNull} name={user.fullName} role={user.profession} />
      <Gap height={14} />
      <List onPress={() => navigation.navigate("UpdateProfile")} icon="profile" name="Edit Profile" desc="Last updated yesterday" type="next" />
      <List icon="language" name="Language" desc="Available 12 languages" type="next" />
      <List icon="rate" name="Give Us Rate" desc="On Google Play Store" type="next" />
      <List icon="file" name="Sign Out" desc="Sign Out Application" type="next" onPress={signOut} />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
})
