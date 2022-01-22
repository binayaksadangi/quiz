import { StyleSheet, View,  Image  } from 'react-native';
import React from 'react';
import Title from '../components/title';
import Btn from '../components/button';


const Home = () => {
  return (
    <View>
        <Title heading='Quizem'/>
        <View style={styles.bannerContainer}>
            <Image source={require('../assets/banner.png')} style={styles.banner}
            resizeMode='contain'
            />
        </View>
        <Btn title='Start'/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    
    },
    bannerContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },


});
