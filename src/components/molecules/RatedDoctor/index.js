import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DMDoctor1, ICStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

const RatedDoctor = ({ role, doctorName }) => {
    return (
        <View style={styles.container}>
            <Image source={DMDoctor1} style={styles.avatar} />
            <View style={styles.profile}>
                <View>
                    <Text style={styles.name}>{doctorName}</Text>
                    <Text style={styles.role}>{role}</Text>
                </View>
            </View>
            <View style={styles.star}>
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
            </View>
        </View>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    profile: {
        flex: 1
    },
    star: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    role: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2
    }
})
