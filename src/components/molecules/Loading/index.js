import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loading}>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.loadingBackground,
        width: '100%',
        height: '100%',
    },
    loading: {
        fontSize: 18,
        color: colors.primary,
        fontFamily: fonts.primary[600],
        marginTop: 16,
    }
})
