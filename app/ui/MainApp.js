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
    errors: null,
    temperature:null,
    name: null
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          
        });
        console.log(position);
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
        this.setState({
          // errors: error.message,
        });
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  _getWeather = (lat, lang) => {
     console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=${API_KEY}`)
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
        })
      })
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
            <Text style={styles.loadingText}>Getting the Weather</Text>
            {/* {errors ? <Text>{errors}</Text> : null} */}
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
  errorText: {
    color: 'red',
    backgroundColor: 'white',
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
