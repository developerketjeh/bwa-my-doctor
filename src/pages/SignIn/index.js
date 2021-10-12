import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link text="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" />
            <Gap height={30} />
            <Link text="Create New Account" size={16} align="center" />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 40
    },
    title: {
        fontSize: 20,
        color: '#112340',
        fontFamily: 'Nunito-SemiBold',
        marginVertical: 40,
        maxWidth: 160
    }
})
