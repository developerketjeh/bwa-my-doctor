import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DMDoctor4 } from '../../assets';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile avatar={DMDoctor4} name="Nairobi Putri Hayza" role="Dokter Anak" type="doctor-female" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
            <ProfileItem label="No. STR" value="0000116622081996" />
            <View style={styles.btnProfile}>
                <Button title="Start Consultation" onPress={() => navigation.navigate("Chat")} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    btnProfile: {
        paddingHorizontal: 40,
        paddingTop: 23,
    }
})
