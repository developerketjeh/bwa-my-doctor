import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ICSend, ICSendActive } from '../../../assets';
import { colors } from '../../../utils';

const BtnIconSend = ({ onPress, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(disabled)}>
            {disabled ? <ICSend /> : <ICSendActive />}
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disabled) => ({
        backgroundColor: !disabled ? colors.button.message.background : colors.disabled,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8,
    })
})
