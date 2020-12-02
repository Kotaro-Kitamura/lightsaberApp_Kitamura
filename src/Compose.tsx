import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export function Compose() {
  const navigation = useNavigation();
  const toBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <View style={styles.button}>
      <Pressable onPress={toBack}>
        <Text style={styles.buttonText}>戻る</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
    </View>
  ); 
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "black",
     alignItems: "center",
     justifyContent: "center",
   },
   button: {
     width: "80%",
     height: 60,
     padding: 5,
     borderRadius: 30,
     backgroundColor: "purple",
     alignItems: "center",
     justifyContent: "center",
     margin: 3,
   },
   buttonText: {
     fontSize: 30,
     color: "white",
   },
 });
