import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_PAGE } from "./constant";
import Home from "../page/Home/Home";
import BottomTabsLayout from "./BottomTabsLayout";

const Tab = createBottomTabNavigator();
export default function BottomTAbs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabsLayout {...props} />}
    >
      <Tab.Screen name={HOME_PAGE} component={Home} />
    </Tab.Navigator>
  );
}
