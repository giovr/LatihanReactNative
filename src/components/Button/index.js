import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Button = ({title, onPress}) => {
    return(
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}> {title} </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
   
    containerButton:{
        marginBottom: 43, 
        maxWidth: 225, 
    },
    button:{
        backgroundColor: '#A55EEA',
        borderRadius: 25,
        marginBottom: 15,
        paddingVertical: 13,
    },
    textButton:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }, 
    
  })