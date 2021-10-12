import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ type, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
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
