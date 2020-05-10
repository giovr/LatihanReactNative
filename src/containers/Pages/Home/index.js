import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';

import ActionButton from './ActionButton'
import { homeImg1, homeImg2, homeImg3, homeImg4, homeImg5 } from '../../../../assets';


const Home = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#808080"/>
            </View>
            {/* Content */}
            <View style={styles.containerContent}>
                <Image source={homeImg5} style={styles.containerImg}/>
                <View>
                    <Text style={styles.textJudul}>Aplikasi Covid19 Tracker</Text>
                    
                    <ActionButton 
                        title="Data Global" 
                        onPress={() => handleGoTo('DataGlobal')}
                    />
                    <ActionButton 
                        title="Data Indonesia" 
                        onPress={() => handleGoTo('DataIndonesia')}
                    />
                </View>
   
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'pink'
    },
    containerContent:{
        flex: 1,
        paddingBottom: 100,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',    
    }, 
    containerImg:{
        height: 190,
        width: 219,
        backgroundColor: 'white',
    },
    textJudul:{
        top: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 120,
    },

    
  })