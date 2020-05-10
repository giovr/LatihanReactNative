import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { Home } from '../containers/Pages';
import { DataGlobal } from '../containers/Pages';
import { DataIndonesia } from '../containers/Pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ 
                title: "Data Covid19 Global & Indonesia",
                
                
                }}/>
            <Stack.Screen name="DataGlobal" component={DataGlobal} options={{ 
                title: "Data Global",
                }}/>
                
            <Stack.Screen name="DataIndonesia" component={DataIndonesia} options={{ 
                title: "Data Indonesia,"
                
                }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}


// class Router extends Component{
//     render(){
//       return (
//         <NavigationContainer >
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
//             <Stack.Screen name="DataGlobal" component={DataGlobal} options={{headerShown: false}} />
//             <Stack.Screen name="DataIndonesia" component={DataIndonesia} options={{headerShown: false}} />
//         </Stack.Navigator>
//         </NavigationContainer>
//       );
//     } 
//   }

export default Router;
