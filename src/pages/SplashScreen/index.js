import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("GetStarted")
        }, 3000)
    })
    return (
        <View style={styles.container}>
            <ILLogo />
            <Text style={styles.logoText}>My Doctor</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    logoText: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        paddingTop: 20
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
