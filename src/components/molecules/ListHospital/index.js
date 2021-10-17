import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DMHospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospital = () => {
    return (
        <View style={styles.container}>
            <Image source={DMHospital1} style={styles.hospital} />
            <View>
                <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
                <Text style={styles.alamat}>Jln. Surya Sejahtera 20</Text>
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
