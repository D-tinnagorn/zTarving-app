import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../page/auth/Login'
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from './constant'
import Register from '../page/auth/Register'
import Home from '../page/Home/Home'

const Stack = createNativeStackNavigator()

export default function StackRoute() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={LOGIN_PAGE} component={Login}/>
          <Stack.Screen name={REGISTER_PAGE} component={Register}/>
          <Stack.Screen name={HOME_PAGE} component={Home}/>


        </Stack.Navigator>
       </NavigationContainer>
  )
}