import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ListHospital = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.picture} style={styles.hospital} />
            <View>
                <Text style={styles.name}>{props.title}</Text>
                <Text style={styles.alamat}>{props.alamat}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    hospital: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
        maxWidth: '90%'
    },
    alamat: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 6
    }
})
