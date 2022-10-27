import { StatusBar } from 'expo-status-bar';
import {  ScrollView, StyleSheet, Text, View } from 'react-native';

import Index from './Index'
export default function App() {
  return (
    <View >
      <ScrollView style={{width:'100%'}} >
      <Index/>
      </ScrollView>
    </View>
  );
}


