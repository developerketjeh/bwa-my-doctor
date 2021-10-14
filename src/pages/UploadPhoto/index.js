import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICAddPhoto, ILPhotoNull } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILPhotoNull} style={styles.avatar} />
                        <ICAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.role}>Product Designer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" />
                    <Gap height={30} />
                    <Link text="Skip for this" align="center" size={16} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    avatar: {
        width: 110,
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 6,
        right: 0
    },
    name: {
        fontFamily: fonts.primary[600],
        fontSize: 24,
        color: colors.text.primary,
        marginTop: 26,
        textAlign: 'center'
    },
    role: {
        fontFamily: fonts.primary.normal,
        fontSize: 18,
        color: colors.text.secondary,
        marginTop: 4,
        textAlign: 'center'
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
