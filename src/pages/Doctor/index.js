import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts } from '../../utils';

const Doctor = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperContent}>
                        <Gap height={30} />
                        <HomeProfile />
                        <Gap height={30} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32} />
                                <DoctorCategory />
                                <DoctorCategory />
                                <DoctorCategory />
                                <DoctorCategory />
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <Gap height={30} />
                    <View style={styles.wrapperContent}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        <RatedDoctor />
                        <RatedDoctor />
                        <RatedDoctor />
                        <Gap height={30} />
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        width: 219,
        marginBottom: 16
    },
    category: {
        flexDirection: 'row'
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginBottom: 16
    },
    wrapperContent: {
        paddingHorizontal: 16
    }
})
