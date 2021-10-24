import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DMUser } from '../../assets';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors } from '../../utils';

const UpdateProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Profile avatar={DMUser} type="edit-profile" />
                    <Gap height={26} />
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Pekerjaan" />
                    <Gap height={24} />
                    <Input label="Email Address" />
                    <Gap height={24} />
                    <Input label="Password" />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={() => navigation.navigate('UserProfile')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    form: {
        padding: 40,
        paddingTop: 0
    },
})
