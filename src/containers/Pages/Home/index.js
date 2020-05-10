import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import BottomNavBar from '../../../components/BottomNavBar';


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#808080"/>
            </View>
            {/* Content */}
            <View style={styles.containerContent}>
                <Text>HOME SCREEN</Text>
            </View>
            {/* Bagian Bottom Navigation */}
            <View style={styles.containerNavigation}>
                <View style={styles.containerHome}>
                    <BottomNavBar onPress={() => navigation.navigate('Home')} title="Home" icon={require('../../../../assets/Icon/home2.png')} />
                </View>
                <View style={styles.containerGlobal}>
                    <BottomNavBar onPress={() => navigation.navigate('DataGlobal')} title="DataGlobal" icon={require('../../../../assets/Icon/global2.png')}/>
                </View>
                <View style={styles.containerIndonesia}>
                    <BottomNavBar onPress={() => navigation.navigate('DataIndonesia')} title="DataIndonesia" icon={require('../../../../assets/Icon/indonesia2.png')} />
                </View>
            </View>
        </View>
    )
};



// class Home extends Component {

//     render(){
//         return(
//             <View style={styles.container}>
//                 {/* Status Bar */}
//                 <View>
//                     <StatusBar barStyle="light-content" backgroundColor="#808080"/>
//                 </View>
//                 {/* Content */}
//                 <View style={styles.containerContent}>
//                     <Text>HOME SCREEN</Text>
//                 </View>
//                 {/* Bagian Bottom Navigation */}
                
//             </View>
//         )
//     }
// }

export default Home;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'green'
    },
    containerContent:{
      flex: 1,
      backgroundColor: '#EBEBEB'
    },
  
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