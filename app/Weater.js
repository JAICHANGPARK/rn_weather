import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <View style={styles.upper}>
          <Icon name="ios-rainy" type="ionicon" color="#517fa4" size={144} color='white'/>
        
          <Text style={styles.temp}>Temp Here</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining Like a MF</Text>
          <Text style={styles.subtitle}>For more info look outsied</Text>
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

  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 16,
  },
});
