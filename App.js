import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <View style={styles.body}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
          <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
        </View>
      </NavigationContainer>

    
 
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#14213D',
  }
})