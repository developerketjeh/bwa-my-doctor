import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DMDoctor4, DMDoctor5, DMDoctor6, DMDoctor7, DMDoctor8 } from '../../assets';
import { Header, ListDoctor } from '../../components';
import { colors } from '../../utils';

const ChooseDoctor = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Pilih Dokter Anak" onPress={() => navigation.goBack()} type="dark" />
            <ListDoctor onPress={() => navigation.navigate("Chat")} type="next" profile={DMDoctor4} name="Alexander Jannie" desc="Wanita" />
            <ListDoctor onPress={() => navigation.navigate("Chat")} type="next" profile={DMDoctor5} name="John McParker Steve" desc="Pria" />
            <ListDoctor onPress={() => navigation.navigate("Chat")} type="next" profile={DMDoctor6} name="Nairobi Putri Hayza" desc="Wanita" />
            <ListDoctor onPress={() => navigation.navigate("Chat")} type="next" profile={DMDoctor7} name="James Rivillia" desc="Wanita" />
            <ListDoctor onPress={() => navigation.navigate("Chat")} type="next" profile={DMDoctor8} name="Liu Yue Tian Park" desc="Wanita" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    }
})
