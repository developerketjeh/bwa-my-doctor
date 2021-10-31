import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICAddPhoto, ICRemovePhoto, ILPhotoNull } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, fonts } from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

const UploadPhoto = ({ navigation }) => {
    const [image, setImage] = useState('');
    const [hasPhoto, setHasPhoto] = useState('');
    const getImage = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
            if (response.didCancel || response.errorMessage) {
                showMessage({
                    message: 'Oopss, sepertinya anda belum memilih fotonya?',
                    type: "warning",
                    duration: 2000,
                })
            } else {
                setImage(response.assets[response.assets.length - 1].base64);
                setHasPhoto(response.assets[response.assets.length - 1].uri);
            }
        })
    }
    return (
        <View style={styles.container}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={hasPhoto ? { uri: hasPhoto } : ILPhotoNull} style={styles.avatar} />
                        {hasPhoto ? <ICRemovePhoto style={styles.addPhoto} /> : <ICAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.role}>Product Designer</Text>
                </View>
                <View>
                    <Button disabled={!hasPhoto} title="Upload and Continue" onPress={() => navigation.replace("MainApp")} />
                    <Gap height={30} />
                    <Link text="Skip for this" align="center" size={16} onPress={() => navigation.replace("MainApp")} />
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
        height: 110,
        borderRadius: 110 / 2
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
