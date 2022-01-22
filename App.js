import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {
  return (
    <View style={styles.body}>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Result />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#14213D',
  }
})