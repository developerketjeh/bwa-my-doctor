import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'

const Button = ({ type, title, onPress, icon }) => {
    if (type === 'icon-only') {
        return (
            <IconOnly icon={icon} onPress={onPress} />
        )
    }
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
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10
    }),
    text: (type) => ({
        fontSize: 18,
        textAlign: 'center',
        color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
        fontFamily: fonts.primary[600],
    })
})
