import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Trending } from '../components';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    
      <Trending />
      <Text>Open up App.tsx to start working on your app!</Text>
    
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdef',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
