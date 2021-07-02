
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import {AppLoading} from 'expo'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class App extends React.Component {
  
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.ttf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.ttf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.ttf'),
      'Pattaya' : require('./src/fonts/Pattaya-Regular.ttf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return (
      <AppNavigator/>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});