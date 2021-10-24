import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DMUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HomeProfile = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DMUser} style={styles.avatar} />
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.role}>Product Designer</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    role: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    }
})
