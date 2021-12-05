import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts, getChatTime, getData, setDateChat, showError } from '../../utils';
import Firebase from '../../config/Firebase';
import { ILPhotoNull } from '../../assets';

const Chat = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const dataDoctor = route.params;
  const [user, setUser] = useState({
    email: '',
    fullName: '',
    profession: '',
    uid: ''
  });
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal()
    const chatId = `${user.uid}_${dataDoctor.data.uid}`
    const urlFirebase = `chatting/${chatId}/allChat/`
    Firebase.database().ref(urlFirebase).on('value', snap => {
      if (snap.val()) {
        const dataSnap = snap.val();
        const allDataChat = []
        Object.keys(dataSnap).map(key => {
          const dataChat = dataSnap[key];
          const newDataChat = []
          Object.keys(dataChat).map(item => {
            newDataChat.push({
              id: item,
              data: dataChat[item]
            })
          })
          allDataChat.push({
            id: key,
            data: newDataChat
          })
        })
        setChatData(allDataChat)
      }
    })
  }, [dataDoctor.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }

  const send = () => {
    const today = new Date()

    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: message
    }

    const chatId = `${user.uid}_${dataDoctor.data.uid}`
    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`
    const urlMessagesUser = `messages/${user.uid}/${chatId}`
    const urlMessagesDocter = `messages/${dataDoctor.data.uid}/${chatId}`

    const dataHistoryChatForUser = {
      lastContentChat: message,
      lastChatDate: today.getTime(),
      uidParthner: dataDoctor.data.uid
    }

    const dataHistoryChatForDocter = {
      lastContentChat: message,
      lastChatDate: today.getTime(),
      uidParthner: user.uid
    }

    Firebase.database().ref(urlFirebase).push(data)
      .then(res => {
        setMessage('')

        // set history for user
        Firebase.database().ref(urlMessagesUser).set(dataHistoryChatForUser)

        // set history for docter
        Firebase.database().ref(urlMessagesDocter).set(dataHistoryChatForDocter)
      })
      .catch(err => {
        showError(err.message)
      })
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} type="dark-profile" title={dataDoctor.data.fullName} role={dataDoctor.data.profession} avatar={{ uri: dataDoctor.data.photo }} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            chatData.map(chat => (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {
                  chat.data.map(itemChat => (
                    <ChatItem key={itemChat.id} isMe={itemChat.data.sendBy === user.uid} message={itemChat.data.chatContent} time={itemChat.data.chatTime} photo={dataDoctor.data.photo ? { uri: dataDoctor.data.photo } : ILPhotoNull} />
                  ))
                }
              </View>
            ))
          }
        </ScrollView>
      </View>
      <InputChat value={message} onChange={(e) => setMessage(e)} dataDoctor={dataDoctor} onPress={send} />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  }
})
