import { NavigationContainer, NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";


export function Main() {
  const navigation = useNavigation(); 

  const toCompose = () => {
    navigation.navigate("Compose"); 
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable onPress={toCompose}>
          <Text style={styles.buttonText}>ジェダイになる</Text>
          <StatusBar style="auto" />
        </Pressable>
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
    width: '80%',
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
