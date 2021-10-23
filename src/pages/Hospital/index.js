import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DMHospital1, DMHospital2, DMHospital3, ILHospitalBackground } from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospital = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILHospitalBackground} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.label}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital title="Rumah Sakit Citra Bunga Merdeka" alamat="Jln. Surya Sejahtera 20" picture={DMHospital1} />
                <ListHospital title="Rumah Sakit Anak Happy Family & Kids" alamat="Jln. Surya Sejahtera 20" picture={DMHospital2} />
                <ListHospital title="Rumah Sakit Jiwa Tingkatan Paling Atas" alamat="Jln. Surya Sejahtera 20" picture={DMHospital3} />
            </View>
        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14
    },
    background: {
        height: 240
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 6
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        textAlign: 'center',
    }
})
