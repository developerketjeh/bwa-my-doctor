import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input, Loading } from '../../components';
import { colors, storeData, useForm } from '../../utils';
import { Firebase } from '../../config';
import { showMessage } from "react-native-flash-message";

const SignUp = ({ navigation }) => {
  const [register, setRegister] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const onChange = (label, value) => {
    setRegister(label, value)
  };
  const save = () => {
    setLoading(true);
    Firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setRegister('reset')
        setLoading(false);
        const data = {
          fullName: register.fullName,
          profession: register.profession,
          email: register.email,
          uid: user.uid
        }
        Firebase
          .database()
          .ref('users/' + user.uid + '/')
          .set(data);

        showMessage({
          message: 'Sukses register',
          type: "success",
          duration: 2000,
        });
        storeData('@user', data, 'object');
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage === 'The email address is already in use by another account.' ? 'Maaf, email sudah terdaftar pada aplikasi.' : errorMessage,
          type: "danger",
          duration: 2000,
          backgroundColor: colors.error
        });
        setLoading(false);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.form}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input label="Full Name" value={register.fullName} onChangeText={(text) => onChange('fullName', text)} />
            <Gap height={24} />
            <Input label="Pekerjaan" value={register.profession} onChangeText={(text) => onChange('profession', text)} />
            <Gap height={24} />
            <Input label="Email Address" value={register.email} onChangeText={(text) => onChange('email', text)} />
            <Gap height={24} />
            <Input isPassword label="Password" value={register.password} onChangeText={(text) => onChange('password', text)} />
            <Gap height={40} />
            <Button title="Continue" onPress={save} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  form: {
    padding: 40,
    paddingTop: 0
  }
})
