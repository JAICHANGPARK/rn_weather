import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Weather extends Component{
    render(){

        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
            style ={styles.container} >

        </LinearGradient>
        );
        
    }
}

const styles= StyleSheet.create({
container :{
    flex: 1
}

});