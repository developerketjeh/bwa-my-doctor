import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
            <View style={styles.form}>
                <Input label="Full Name" />
                <Gap height={24} />
                <Input label="Pekerjaan" />
                <Gap height={24} />
                <Input label="Email Address" />
                <Gap height={24} />
                <Input label="Password" />
                <Gap height={40} />
                <Button title="Continue" />
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
