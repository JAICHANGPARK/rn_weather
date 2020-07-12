import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <View style={styles.upper}>
          <Text>Icon Here</Text>
          <Text style={styles.temp}>Temp Here</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles
        .title}>Raining Like a MF</Text>
          <Text style={styles
        .subtitle}>For more info look outsied</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temp:{
    fontSize: 24,
    backgroundColor: 'transparent',
    color:'white',
    marginBottom: 24
  },
  lower:{
    
    flex: 1,
    alignItems:'flex-start',
    justifyContent :'flex-end',
    paddingLeft: 25,
  },
  title:{
      fontSize: 38,
      backgroundColor: 'transparent',
      color:'white',
      marginBottom: 10,
      fontWeight: "300"
  },
  subtitle:{
    fontSize: 24,
    backgroundColor: 'transparent',
    color:'white',
    marginBottom: 24
  }
  
});
