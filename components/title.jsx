import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = (props) => {
  return (
    <View>
      <Text style={styles.heading}>{props.heading}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    heading: {
        fontSize: 36,
        fontWeight: '600',
        // borderColor: '#fff',
        // borderWidth: 1,
        padding: 10,
        marginTop: 50,
        color: '#E5E5E5',
        marginHorizontal: 20,
        marginTop:60,
        textAlign: 'center',
        letterSpacing: 4,
        
    }
});
 