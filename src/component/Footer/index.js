import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Shoes from '../Shoes';


export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>você tambem pode gostar</Text>
            <View style={{flexDirection:'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/1.png')} valor = "R$199.90">
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/3.png')} valor = "R$299.90">
                            Nike Downshifter 10
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/4.png')} valor = "R$399.90">
                            Nike Squidward Tentacles
                        </Shoes>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})