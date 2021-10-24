import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ICLogo } from '../../assets';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({ navigation }) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.container}>
            <View>
                <ICLogo />
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate("SignUp")} />
                <Gap height={16} />
                <Button type="secondary" title="Sign In" onPress={() => navigation.navigate("SignIn")} />
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 28,
        color: colors.white,
        fontFamily: fonts.primary[600],
        marginTop: 91
    }
})
