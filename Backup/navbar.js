import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavBar from '../../components/BottomNavBar/';

class NavBar extends Component{
    render(){
        return(
            <View style={styles.containerNavigation}>
                <View style={styles.containerHome}>
                    <BottomNavBar onPress={() => handleGoTo('Home')} title="Home" icon={require('../../../assets/Icon/home2.png')} />
                </View>
                <View style={styles.containerGlobal}>
                    <BottomNavBar onPress={() => handleGoTo('DataGlobal')} title="DataGlobal" icon={require('../../../assets/Icon/global2.png')}/>
                </View>
                <View style={styles.containerIndonesia}>
                    <BottomNavBar onPress={() => handleGoTo('DataIndonesia')} title="DataIndonesia" icon={require('../../../assets/Icon/indonesia2.png')} />
                </View>
            </View>
        )
    }
}

export default NavBar;

const styles = StyleSheet.create({
    containerNavigation:{
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 55,
      },
      containerHome:{
        flex: 1,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerGlobal:{
        flex: 1,
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerIndonesia:{
        flex: 1,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
  })
