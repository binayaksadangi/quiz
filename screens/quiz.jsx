import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import Btn from '../components/button';


const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
         <Text style={styles.ques}>Quiz Question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Btn title='SKIP'/>
        <Btn title='NEXT'/>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
    marginTop:50,

  },
  top: {
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 20,
    margin: 20,
    padding: 10,
  },
  options:{
    borderColor: '#fff',
    borderWidth: 1,
    margin: 20,
    padding: 10,
    flex: 1,
  },
  button:{
    borderColor: '#fff',
    borderWidth: 1,
    margin: 20,
   
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  ques:{
    color: '#E5E5E5',
    fontSize: 40,
  },
  optionText:{
    color:'#fff',
    fontSize: 25,
  }
});
