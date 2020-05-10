import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { Splash } from '../containers/Pages';
import { Home } from '../containers/Pages';
import { DataGlobal } from '../containers/Pages';
import { DataIndonesia } from '../containers/Pages';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

const Stack = createStackNavigator();


const Router = () => {
    return(
        <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen 
                name="Splash" 
                component={Splash} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="DataGlobal" 
                component={DataGlobal}
                options={{
                    title: 'Data Global'
                }}
            />
            <Stack.Screen 
                name="DataIndonesia" 
                component={DataIndonesia} 
                options={{
                    title: "Data Indonesia"
                    
                }}    
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
