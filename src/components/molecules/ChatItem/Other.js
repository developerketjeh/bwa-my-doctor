import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DMDoctor7 } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DMDoctor7} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.time}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingLeft: 16,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    message: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    time: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 12
    },
})
