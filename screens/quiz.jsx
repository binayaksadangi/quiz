import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useEffect,useState } from 'react';
import Btn from '../components/button';
import axios from 'axios';

const api = axios.create({
  baseURL:'https://opentdb.com'
})

const Quiz = ({navigation}) => {
  const [questions,setQuestions] = useState([]);
  useEffect(() => {
    const getQuiz = async() =>{
      const res =  await api.get('/api.php?amount=10&type=multiple')
     
     setQuestions(res.data.results);
     console.log(questions[0].question);
    }
    getQuiz();
  },[])
  const nav =()=>{
    navigation.navigate('Result');
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
         <Text style={styles.ques}>Q.{questions[0].question}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>{questions[0].correct_answer} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}> 
          <Text style={styles.optionText}>
           
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Btn title='SKIP'/>
        <Btn title='NEXT'/>
        <Btn title='END' nav={nav}/>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213d',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,

  },
  top: {
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 60,
    padding: 10,
  },
  options:{
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    flex: 1,
  
  },
  button:{
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  ques:{
    color: '#E5E5E5',
    fontSize: 28,
  },
  optionText:{
    color:'#fff',
    fontSize: 18,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#FDB849',
    borderRadius: 12,
    // borderColor: '#fff',
    // borderWidth: 1,
  },
  optionButton:{
    marginBottom: 10,
  }
});
