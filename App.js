// In App.js in a new project
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Src/Details";
import Home from "./Src/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name=" Login Page"
          component={Home}
          options={{
            headerShow: false,
          }}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            headerShow: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
