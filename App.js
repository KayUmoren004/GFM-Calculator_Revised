import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./Screens/MainScreen";
import CalculationScreen from "./Screens/CalculationScreen";
import {Button} from 'react-native'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: "#000", shadowColor: 'transparent' },
            headerTintColor: "#fff",
            route: { route },
            navigation: { navigation },
          })}
          name=" "
          component={MainScreen}
        />
        <Stack.Screen
          options={({ route, navigation }) => ({
            headerStyle: { backgroundColor: "#000", shadowColor: 'transparent' },
            headerTintColor: "#fff",
            route: { route },
            navigation: { navigation },
           
          })}
          name="Calculation"
          component={CalculationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
