import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import {styles} from './mycss.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
      {/* <StatusBar style="auto" /> */}
      <View style={{flex:0.2}}>
        <Image
        style={{width:100,height:100, marginTop:100}} source={require("./assets/favicon.png")}/>
      </View>

      <View style={{flex:0.6, justifyContent: "center" ,alignContent:"center"}}>
      <TextInput style={{backgroundColor: "lightgrey", width: 140, height: 30, marginBottom: 20}}/>
      <TextInput style={{backgroundColor: "lightgrey", width: 140, height: 30, marginBottom: 20}}/>
      </View>

      <View style={{flex:0.3}}>
        <TouchableOpacity style={{padding: 30}}>
          <Text>Press Here</Text>
        </TouchableOpacity>

        <Button title='Sign Up' color="#f194ff" style={{padding:20, marginBottom: 20}}/>
        <Button title='Log In' color="#f194ff"/>

      </View>
    </View>
  );
}


