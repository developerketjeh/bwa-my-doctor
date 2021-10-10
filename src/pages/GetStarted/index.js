import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'

const GetStarted = () => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.container}>
            <View>
                <ILLogo />
                <Text style={styles.text}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" />
                <Gap height={16} />
                <Button type="secondary" title="Sign In" />
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
        color: '#FFFFFF',
        fontFamily: 'Nunito-SemiBold',
        marginTop: 91
    }
})
