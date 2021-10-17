import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICTermometer } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = () => {
    return (
        <View style={styles.container}>
            <ICTermometer style={styles.icon} />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>dokter umum</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginRight: 10,
        width: 100,
        height: 130
    },
    icon: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
