import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from '../../atoms';
import { colors, fonts } from '../../../utils';

const InputChat = ({ value, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" value={value} onChangeText={onChange} />
            <Button type="btn-icon-send" disabled={!value} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.disabled,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 20,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
        maxHeight: 45,
    },
    container: {
        padding: 16,
        flexDirection: 'row',
    }
})
