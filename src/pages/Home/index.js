import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import Shoes from "../../component/Shoes";
import { useNavigation } from  '@react-navigation/native'
import Detail from "../Detail";

export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')} style={styles.image}></Image>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, {color: '#cececf'}]}>*</Text>
                    <Text style={[styles.text, {color: '#cececf'}]}>MASCULINO</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: "center"}}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}/>
            <ScrollView>
                <Text style={styles.text}>LANÇAMENTO</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/1.png')} valor="R$140,90" onClick={()=>navigation.navigate('Detail')}>Nike Air Max Dia</Shoes>
                    <Shoes img={require('../../assets/2.png')} valor="R$280,90" onClick={()=>navigation.navigate('Detail')}>Nike Downshifter 10</Shoes>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/3.png')} valor="R$399,90" onClick={()=>alert('CLICOU')}>Nike Squidward Tentacles</Shoes>
                    <Shoes img={require('../../assets/4.png')} valor="R$299,99" onClick={()=>alert('CLICOU')}>Nike Epic React Flyknit 2</Shoes>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/5.png')} valor="R$349,00" onClick={()=>alert('CLICOU')}>Nike Joyride Run Flyknit</Shoes>
                    <Shoes img={require('../../assets/6.png')} valor="R$280,90" onClick={()=>alert('CLICOU')}>Nike Nike Air Max </Shoes>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }
})