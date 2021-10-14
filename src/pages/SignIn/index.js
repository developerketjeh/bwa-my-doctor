import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors, fonts } from '../../utils';

const SignIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ICLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link text="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace("MainApp")} />
            <Gap height={30} />
            <Link text="Create New Account" size={16} align="center" />
        </View>
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
