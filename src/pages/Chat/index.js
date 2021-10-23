import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts } from '../../utils';

const Chat = ({ navigation }) => {
    const [message, setMessage] = useState('');
    return (
        <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} type="dark-profile" title="Nairobi Putri Hayza" />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />
            </View>
            <InputChat value={message} onChange={(e) => setMessage(e)} />
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
