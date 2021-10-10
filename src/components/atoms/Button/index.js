import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ type, title }) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        borderRadius: 10,
        backgroundColor: type === 'secondary' ? '#FFFFFF' : '#0BCAD4',
        paddingVertical: 10
    }),
    text: (type) => ({
        fontSize: 18,
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : '#FFFFFF',
        fontFamily: 'Nunito-SemiBold',
    })
})
