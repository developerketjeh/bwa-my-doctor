import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DMDoctor4, DMDoctor5, DMDoctor6, DMDoctor7, DMDoctor8 } from '../../assets';
import { Header, List } from '../../components';
import { Firebase } from '../../config';
import { colors, showError } from '../../utils';

const ChooseDoctor = ({ navigation, route }) => {
  const categoryDoctor = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    callDoctorByCateogry(categoryDoctor.category)
  }, []);

  const callDoctorByCateogry = (category) => {
    Firebase.database().ref("doctors/").orderByChild("category").equalTo(category).once('value').then(res => {
      if (res.val()) {
        const oldData = res.val();
        const data = []
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            data: oldData[key]
          })
        })
        setListDoctor(data)
      }
    })
      .catch(err => {
        showError(err.message)
      })
  }

  return (
    <View style={styles.container}>
      <Header title={`Pilih ${categoryDoctor.category !== "psikiater" ? `Dokter ${categoryDoctor.category}` : categoryDoctor.category}`} onPress={() => navigation.goBack()} type="dark" />
      {
        listDoctor.map(doctor => (
          <List onPress={() => navigation.navigate("DoctorProfile", doctor)} type="next" profile={{ uri: doctor.data.photo }} name={doctor.data.fullName} desc={doctor.data.gender} key={doctor.id} />
        ))
      }
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  }
})
