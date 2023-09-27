import React, {useState} from "react";
import {TouchableOpacity, Text, StyleSheet, View, Button, Image, TouchableWithoutFeedback, Alert, ImageBackground} from "react-native";
import DragList from "react-native-draglist";
import Prompt from "./Prompt"
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

const DEFAULT_LIST = ["Player 1", "Player 2", "Player 3", "Player 4"];
const DEFAULT_FIELD_LIST = ["P", "C", "R", "1", "2", "3", "SS", "LF", "LC", "RC", "RF"]

const Field = () => {
  const [lineUp, setLineUp] = useMMKVStorage<string[]>('lineUp', storage, DEFAULT_LIST);
  const [field, setField] = useMMKVStorage<string[]>('field', storage, DEFAULT_FIELD_LIST)
  const [locked, setLocked] = useState<boolean>(false)
  const [turn, setTurn] = useMMKVStorage<number>('turn', storage, 0)

  console.log(lineUp)
  return (
    <View style={styles.body}>
        <ImageBackground source={require("./field.png")} style={styles.field}>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "rgba(100,100,100,1)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  field: {
    flex: 1,
    width: "100%",
    height: "80%",
    justifyContent: 'center',
  }
})

export default Field