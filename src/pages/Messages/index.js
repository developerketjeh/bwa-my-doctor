import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DMDoctor1, DMDoctor2, DMDoctor3 } from '../../assets';
import { ListDoctor } from '../../components';
import { colors, fonts } from '../../utils';

const Messages = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            profile: DMDoctor1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...'
        },
        {
            id: 2,
            profile: DMDoctor2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...'
        },
        {
            id: 3,
            profile: DMDoctor3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...'
        }
    ]);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    messages.map(message => (
                        <ListDoctor key={message.id} profile={message.profile} name={message.name} desc={message.desc} />
                    ))
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
