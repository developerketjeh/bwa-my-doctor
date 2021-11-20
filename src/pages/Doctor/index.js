import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts, getData, showError } from '../../utils';
import { ILPhotoNull } from '../../assets';
import { Firebase } from '../../config';

const Doctor = ({ navigation }) => {
  const [user, setUser] = useState({
    fullName: '',
    profession: '',
    photo: ILPhotoNull
  });
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const getNews = () => {
    Firebase.database().ref('news/').once('value').then(res => {
      if (res.val()) {
        const data = res.val();
        const filterData = data.filter(el => el !== null);
        setNews(filterData);
      }
    })
      .catch(err => {
        showError(err.message)
      })
  }

  const getCategoryDoctor = () => {
    Firebase.database().ref('category_doctor/').once('value').then(res => {
      if (res.val()) {
        const data = res.val();
        const filterData = data.filter(el => el !== null);
        setCategoryDoctor(filterData);
      }
    })
      .catch(err => {
        showError(err.message)
      })
  }

  const getTopRatedDoctor = () => {
    Firebase.database().ref('doctors/').orderByChild('rate').limitToLast(3).once('value').then(res => {
      if (res.val()) {
        if (res.val()) {
          const data = [];
          const oldData = res.val();
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key]
            })
          })
          setDoctors(data)
        }
      }
    })
      .catch(err => {
        showError(err.message)
      })
  }

  useEffect(() => {
    getCategoryDoctor()
    getNews()
    getTopRatedDoctor()
  }, [])

  useEffect(() => {
    getData('@user', 'object').then(res => {
      setUser({
        fullName: res.fullName,
        profession: res.profession,
        photo: { uri: res.photo }
      })
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
                  categoryDoctor.map((category) => (
                    <DoctorCategory onPress={() => navigation.navigate("ChooseDoctor", category)} category={category.category} key={category.id} />
                  ))
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {
              doctors.map(item => (
                <RatedDoctor key={item.id} avatar={{ uri: item.data.photo }} onPress={() => navigation.navigate("DoctorProfile", item)} role={item.data.profession} doctorName={item.data.fullName} />
              ))
            }
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {
            news.map((val) => (
              <NewsItem title={val.title} time={val.date} image={val.image} key={val.id} />
            ))
          }
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
