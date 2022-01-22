import { StyleSheet, View,  Image  } from 'react-native';
import React from 'react';
import Title from '../components/title';
import Btn from '../components/button';


const Home = ({navigation}) => {
    const nav =()=>{
        navigation.navigate('Quiz');
    }
  return (
    <View style={styles.cont}>
        <Title heading='QUIZEM'/>
        <View style={styles.bannerContainer}>
            <Image source={require('../assets/banner.png')} style={styles.banner}
            resizeMode='contain'
            />
        </View>
        <Btn nav={nav} title='START'/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    cont:{
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#14213d',
    },
    banner: {
        height: 300,
        width: 300,
    
    },
    bannerContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },


});
