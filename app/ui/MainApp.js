import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import Weather from '../Weater';
import Geolocation from '@react-native-community/geolocation';


export default class MainApp extends Component {
  state = {
    isLoaded: false,
  };
  componentDidMount(){
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          isLoaded : true
        })
          console.log(position);
      },
      (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        {isLoaded ? (
          <Weather></Weather>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingRight: 24,
    paddingLeft: 24,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
    fontWeight: 'bold',
  },
});
