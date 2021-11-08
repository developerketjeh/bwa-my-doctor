import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { ICLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, showError, storeData, useForm } from '../../utils';

const SignIn = ({ navigation }) => {
  const [login, setLogin] = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const onChange = (label, value) => {
    setLogin(label, value)
  };
  const signIn = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true
    });
    Firebase.auth().signInWithEmailAndPassword(login.email, login.password)
      .then(res => {
        dispatch({
          type: 'SET_LOADING',
          value: false
        });
        Firebase.database().ref(`users/${res.user.uid}/`).once('value')
          .then(user => {
            if (user.val()) {
              storeData('@user', user.val(), 'object')
              navigation.navigate('MainApp');
            }
          })
      })
      .catch(err => {
        let message = ''
        if (err.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
          message = 'Maaf, akun anda tidak ditemukan. Silahkan register kembali.'
        } else if (err.message === 'The password is invalid or the user does not have a password.') {
          message = 'Password anda salah, silahkan coba kembali.'
        } else {
          message = err.message
        }
        dispatch({
          type: 'SET_LOADING',
          value: false
        });
        showError(message)
      })
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ICLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Address" value={login.email} onChangeText={(text) => onChange('email', text)} />
        <Gap height={24} />
        <Input isPassword label="Password" value={login.password} onChangeText={(text) => onChange('password', text)} />
        <Gap height={10} />
        <Link text="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={signIn} />
        <Gap height={30} />
        <Link text="Create New Account" size={16} align="center" onPress={() => navigation.navigate("SignUp")} />
      </ScrollView>
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 40
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginVertical: 40,
    maxWidth: 160
  }
})
