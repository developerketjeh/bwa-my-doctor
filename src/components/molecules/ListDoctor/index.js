import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICArrowGreyRight } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ListDoctor = ({ profile, name, desc, type, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile} style={styles.image} />
            <View style={styles.wrapperTitle}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{desc}</Text>
            </View>
            {type === 'next' && <ICArrowGreyRight />}
        </TouchableOpacity>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    wrapperTitle: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    chat: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})
