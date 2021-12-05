import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DMDoctor1, DMDoctor2, DMDoctor3, ILPhotoNull } from '../../assets';
import { List } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Messages = ({ navigation }) => {
  const [historyChat, setHistoryChat] = useState([]);
  const [user, setUser] = useState({
    email: '',
    fullName: '',
    profession: '',
    uid: ''
  });

  useEffect(() => {
    getDataUserFromLocal()
    const rootDB = Firebase.database().ref()
    const urlHistory = `messages/${user.uid}/`
    const messagesDB = rootDB.child(urlHistory)

    messagesDB.on('value', async snap => {
      if (snap.val()) {
        const oldData = snap.val();
        const newData = []
        const promises = await Object.keys(oldData).map(async key => {
          const urlUIDDoctor = `doctors/${oldData[key].uidParthner}`;
          const detailDoctor = await rootDB.child(urlUIDDoctor).once('value');
          console.log('detail doctor', detailDoctor.val())
          if (detailDoctor.val()) {
            newData.push({
              id: key,
              ...oldData[key],
              detailDoctor: detailDoctor.val()
            })
          }
        })
        await Promise.all(promises)
        setHistoryChat(newData)
      }
    })
  }, [user.uid])

  const getDataUserFromLocal = () => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }

  console.log('history chat', historyChat)

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          historyChat.map(message => {
            const dataDoctor = {
              id: message.detailDoctor ? message.detailDoctor.uid : '',
              data: message.detailDoctor
            }
            return (
              <List key={message.id} profile={message.detailDoctor ? { uri: message.detailDoctor.photo } : ILPhotoNull} name={message.detailDoctor ? message.detailDoctor.fullName : ''} desc={message.lastContentChat} onPress={() => navigation.navigate("Chat", dataDoctor)} />
            )
          })
        }
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
