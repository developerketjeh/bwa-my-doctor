import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({ type, title, onPress, icon, disabled }) => {
    if (type === 'icon-only') {
        return (
            <IconOnly icon={icon} onPress={onPress} />
        )
    }
    if (type === 'btn-icon-send') {
        return <BtnIconSend onPress={onPress} disabled={disabled} />
    }
    if (disabled) {
        return (
            <View style={styles.disableBg}>
                <Text style={styles.textDisable}>{title}</Text>
            </View>
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
    }),
    disableBg: {
        borderRadius: 10,
        backgroundColor: colors.button.disabled.background,
        paddingVertical: 10
    },
    textDisable: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.button.disabled.text,
        fontFamily: fonts.primary[600],
    }
})
