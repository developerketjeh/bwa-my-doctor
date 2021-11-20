import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DMDoctor4 } from '../../assets';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = ({ navigation, route }) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile avatar={{uri: dataDoctor.data.photo}} name={dataDoctor.data.fullName} role={dataDoctor.data.profession} type={dataDoctor.data.gender === "wanita" ? "doctor-female" : "doctor-male"} />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
      <ProfileItem label="Tempat Praktik" value={dataDoctor.data.hospital_address} />
      <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
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
