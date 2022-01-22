import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react';
import Title from '../components/title';
import Btn from '../components/button';

const Result = () => {
  return (
    <View>
      <Title heading='Results'/>
      <View style={styles.bannerContainer}>
            <ImageBackground source={require('../assets/banner.png')} style={styles.banner}
            resizeMode='contain'
            />
        </View>
        <Btn title='Start Again'/>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
    borderColor: '#000',
    borderWidth: 1,
},
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
},

});
