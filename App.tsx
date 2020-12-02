import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import{ Main } from "./src/Main";
import{ Compose } from "./src/Compose";
import { Audio } from "expo-av";

async function goto(Compose: any) {
  NavigationContainer(Compose);
  try {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(require("./assets/sounds/light_saber1.mp3"));
    await soundObject.playAsync();
  } catch (error) {
    console.log("error...");
  }
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          />
        <Stack.Screen
          name='Compose'
          component={Compose}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

