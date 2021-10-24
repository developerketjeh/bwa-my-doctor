import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';

const Link = ({ text, size, align, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align)}>{text}</Text>
        </TouchableOpacity>
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
