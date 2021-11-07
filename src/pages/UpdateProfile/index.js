import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button, Gap, Header, Input, Loading, Profile } from '../../components';
import { Firebase } from '../../config';
import { colors, getData, storeData } from '../../utils';

const UpdateProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    photo: '',
    fullName: '',
    profession: '',
    email: '',
    uid: ''
  });
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const getImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200 }, (response) => {
      if (response.didCancel || response.errorMessage) {
        showMessage({
          message: 'Oopss, sepertinya anda belum memilih fotonya?',
          type: "warning",
          duration: 2000,
        })
      } else {
        setUser({
          ...user,
          photo: `data:${response.assets[response.assets.length - 1].type};base64, ${response.assets[response.assets.length - 1].base64}`
        });
      }
    })
  }

  const onChange = (label, value) => {
    setUser({
      ...user,
      [label]: value
    })
  };

  const saveProfile = () => {
    setLoading(true);

    if (password.length > 0) {
      if (password.length < 6) {
        setLoading(false);
        showMessage({
          message: 'Password kurang dari 6 karakter.',
          type: 'danger',
          backgroundColor: colors.error
        })
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace("MainApp");
      }
    } else {
      updateProfileData();
      navigation.replace("MainApp");
    }
  }

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          if (err.message === 'This operation is sensitive and requires recent authentication. Log in again before retrying this request.') {
            showMessage({
              message: err.message,
              type: 'danger',
              backgroundColor: colors.error
            })
            navigation.replace('SignIn')
          }
          showMessage({
            message: err.message,
            type: 'danger',
            backgroundColor: colors.error
          })
        })
      }
    })
  }

  const updateProfileData = () => {
    const data = user;
    Firebase.database().ref(`users/${user.uid}/`).update(data)
      .then(() => {
        storeData('@user', data, 'object')
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        showMessage({
          message: err.message,
          type: 'danger',
          backgroundColor: colors.error
        })
      })
  }
  
  useEffect(() => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }, [])
  return (
    <>
      <View style={styles.container}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Profile avatar={user.photo} isRemove onPress={getImage} />
            <Gap height={26} />
            <Input label="Full Name" value={user.fullName} onChangeText={(text) => onChange('fullName', text)} />
            <Gap height={24} />
            <Input label="Pekerjaan" value={user.profession} onChangeText={(text) => onChange('profession', text)} />
            <Gap height={24} />
            <Input disable label="Email Address" value={user.email} />
            <Gap height={24} />
            <Input isPassword label="Password" value={password} onChangeText={(text) => setPassword(text)} />
            <Gap height={40} />
            <Button title="Save Profile" onPress={saveProfile} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  )
}

export default UpdateProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  form: {
    padding: 40,
    paddingTop: 0
  },
})
