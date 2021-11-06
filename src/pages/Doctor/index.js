import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts, getData } from '../../utils';
import { JSONCategoryDoctor } from '../../json';
import { DMDoctor1, DMDoctor2, DMDoctor3, DMNews1, DMNews2, DMNews3 } from '../../assets';

const Doctor = ({ navigation }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperContent}>
            <Gap height={30} />
            <HomeProfile user={user} onPress={() => navigation.navigate("UserProfile")} />
            <Gap height={30} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {
                  JSONCategoryDoctor.data.map((category) => (
                    <DoctorCategory onPress={() => navigation.navigate("ChooseDoctor")} category={category.category} key={category.id} />
                  ))
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor avatar={DMDoctor1} onPress={() => navigation.navigate("DoctorProfile")} role="Pediatrician" doctorName="Alexa Rachel" />
            <RatedDoctor avatar={DMDoctor2} onPress={() => navigation.navigate("DoctorProfile")} role="Dentist" doctorName="Sunny Frank" />
            <RatedDoctor avatar={DMDoctor3} onPress={() => navigation.navigate("DoctorProfile")} role="Podiatrist" doctorName="Poe Minn" />
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem title="Is it safe to stay at home during coronavirus?" time="Today" image={DMNews1} />
          <NewsItem title="Consume yellow citrus helps you healthier" time="Today" image={DMNews2} />
          <NewsItem title="Learn how to make a proper orange juice at home" time="Today" image={DMNews3} />
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
