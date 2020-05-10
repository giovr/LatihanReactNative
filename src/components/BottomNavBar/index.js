import React from 'react';
import { Image, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomNavBar = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image source={props.icon} style={{alignSelf: 'center'}} />
            <Text style={styles.textNavigation}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default BottomNavBar;

const styles = StyleSheet.create({
    
      textNavigation:{
        marginTop: 4,
        fontSize: 13,
        color: '#545454',
        //color: props.active ? '#43AB4A' : '#545454'
      }
})