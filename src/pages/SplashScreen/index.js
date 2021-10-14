import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICLogo } from '../../assets';
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("GetStarted")
        }, 3000)
    })
    return (
        <View style={styles.container}>
            <ICLogo />
            <Text style={styles.logoText}>My Doctor</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    logoText: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        paddingTop: 20
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
