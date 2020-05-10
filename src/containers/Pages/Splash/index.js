import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { homeImg5, homeImg3, homeImg4, homeImg2 } from '../../../../assets';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        },3000);
    });
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
            <Image source={homeImg2} style={styles.containerImg}/>
            </View>
            <Text style={styles.textWelcome}>Welcome</Text>
            
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },   
    containerImg:{
        marginLeft: 10,
        bottom: 20,
        height: 300,
        width: 270,
        backgroundColor: 'white',
    },
    textWelcome:{
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
      color: 'maroon',
    },

  })