import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILHospitalBackground } from '../../assets';
import { ListHospital } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, showError } from '../../utils';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    Firebase.database().ref('hospitals/').once('value').then(res => {
      if (res.val()) {
        setHospitals(res.val());
      }
    })
      .catch(err => {
        showError(err.message)
      })
  }, [])
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.label}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {
          hospitals.map(item => (
            <ListHospital title={item.hospitalName} alamat={item.address} picture={item.image} />
          ))
        }
      </View>
    </View>
  )
}

export default Hospital

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14
  },
  background: {
    height: 240
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 6
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  }
})
