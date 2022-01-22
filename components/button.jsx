import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native';
import React from 'react';

const Btn = (props) => {
  return (
    <View>
       <TouchableOpacity style={styles.btnCont} onPress={props.nav}>
            <Text style={styles.button}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({
    btnCont:{
        marginHorizontal: 50,
        borderRadius: 10,
        backgroundColor: '#FCA311',
        marginTop: 40,
        padding: 10,
    },
    button:{
        fontSize: 30,
        color: '#e5e5e5',
        textAlign: 'center',
    }
});
