import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DMNews1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.time}>Today</Text>
            </View>
            <Image source={DMNews1} style={styles.newsImage} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    newsImage: {
        width: 80,
        height: 80,
        borderRadius: 11
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    time: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 4
    },
    titleWrapper: {
        flex: 1
    }
})
