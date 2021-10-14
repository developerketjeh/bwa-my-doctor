import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'

const Link = ({ text, size, align }) => {
    return (
        <View>
            <Text style={styles.text(size, align)}>{text}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        color: colors.text.secondary,
        fontFamily: fonts.primary.normal,
        textDecorationLine: 'underline',
        fontSize: size,
        textAlign: align
    })
})
