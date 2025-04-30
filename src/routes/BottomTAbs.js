import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_PAGE, LIST_PAGE, RECIPE_PAGE, SETTING_PAGE } from "./constant";
import Home from "../page/Home/Home";
import BottomTabsLayout from "./BottomTabsLayout";
import List from "../page/List/List";
import Recipe from "../page/Recipe/Recipe";
import Setting from "../page/Setting/Setting";

const Tab = createBottomTabNavigator();
export default function BottomTAbs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabsLayout {...props} />}
      
    >
      <Tab.Screen name={HOME_PAGE} component={Home} />
      <Tab.Screen name={LIST_PAGE} component={List} />
      <Tab.Screen name={RECIPE_PAGE} component={Recipe} />
      <Tab.Screen name={SETTING_PAGE} component={Setting} />
    </Tab.Navigator>
  );
}
