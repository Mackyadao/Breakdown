import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Dimensions,StyleSheet, Image } from "react-native";
import Video from 'react-native-video'
import { NavigationEvents } from "react-navigation";

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};



/***
 * To test out just copy this component and render in you root component
 */
export default class MovieDetailsTrailer extends React.Component {
   
    
    render() {
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            backgroundVideo: {
              flex:1
            },
          });

        return (
            
            <View style={{width:"100%", height:"100%",backgroundColor:'#000'}}>
                
                
            <Video source={{uri: "https://www.w3schools.com/html/mov_bbb.mp4"}}
            resizeMode="contain" 
            repeat={true}  // Can be a URL or a local file.
                                    // Callback when video cannot be loaded
                style={{flex:1}} />

                <TouchableOpacity style={{position:"absolute", top:10, left: 10,}}
                    onPress={()=>navigate('MovieDetailsPage')}>
                    <Image
                        source={require('../images/Arrow2.png')}
                        style={{width:35, height:35, }}
                    />
                </TouchableOpacity>
        </View>
        )
    }
}

