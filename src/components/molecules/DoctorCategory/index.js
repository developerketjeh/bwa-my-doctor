import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICObat, ICPsikiater, ICTermometer } from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = ({ category }) => {
    const Icon = () => {
        if (category === 'umum') {
            return <ICTermometer style={styles.icon} />
        }
        if (category === 'psikiater') {
            return <ICPsikiater style={styles.icon} />
        }
        if (category === 'obat') {
            return <ICObat style={styles.icon} />
        }
        return <ICTermometer style={styles.icon} />
    }
    return (
        <View style={styles.container}>
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category === 'umum' || category === 'obat' ? `dokter ${category}` : category}</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginRight: 10,
        width: 100,
        height: 130
    },
    icon: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
