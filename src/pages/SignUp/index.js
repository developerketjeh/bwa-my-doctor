import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';

const SignUp = ({ navigation }) => {
    const [register, setRegister] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    });
    const onChange = (label, value) => {
        setRegister(label, value)
    };
    const save = () => {
        console.log(register)
        // navigation.navigate('UploadPhoto');
    };
    return (
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
