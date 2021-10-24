import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ICDoctor, ICDoctorActive, ICHospital, ICHospitalActive, ICMessages, ICMessagesActive } from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === "Doctor") {
            return active ? <ICDoctorActive /> : <ICDoctor />
        }

        if (title === "Messages") {
            return active ? <ICMessagesActive /> : <ICMessages />
        }

        if (title === "Hospital") {
            return active ? <ICHospitalActive /> : <ICHospital />
        }

        return <ICDoctor />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 10,
        fontFamily: fonts.primary[600],
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        marginTop: 4
    })
})
