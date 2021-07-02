import React, { useState }  from 'react';

import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import Video from 'react-native-video'


const SCREEN_WIDTH = Dimensions.get('window').width;
export default class MovieDetailsPage extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            SearchBar: {
              flex: 1,
              padding: 24,
              backgroundColor: "#fff"
            },
            NavBarTouchOpa:{
                flex:1,
                justifyContent:'center'

            }, 
            NavBarIcons:{
                height:30,
                width:30,
                alignSelf:'center'
            },
            ProfileBtn:{
                width: 40,
                height:40, 
                
            },
            ProfileBtnContainer:{
                marginLeft: 12
            }

          });


        return(
            <View>
                <ScrollView>
                    <View>
                        <Image
                            source={require('../images/Rectangle104.png')}
                            style={{width:375, height:154,}}
                        />
                    <TouchableOpacity style={{ top:19, left:16, position:'absolute'}}
                    onPress={()=>navigate('WhatsTrending')}>
                    
                    <Image
                            source={require('../images/Arrow2.png')}
                            style={{width:34, height:34,}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ top:"30%", left:"44%", position:'absolute', padding:10,borderWidth:4,borderColor:'#fff', borderRadius:50}}
                    onPress={()=>{navigate('MovieDetailsTrailer')}}>
                    
                    <Image
                            source={require('../images/download2.png')}
                            style={{width:31, height:29,}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>  
                    <View style={{marginTop:35,marginLeft:23, marginBottom:26,}}>
                        <Image
                            source={require('../images/Rectangle32.png')}
                            style={{width:95, height:141,}}
                        />
                    </View>
                    <View style={{marginTop:35, marginLeft:35, marginRight:18, marginBottom:35, flex:1,}}>
                        <View style={{flexDirection:'row', flexWrap:'wrap', height:24, width:'100%',justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily:'Anton-Regular', fontSize:16,marginRight:5, marginTop:-5,}}>
                                SYNOPSIS
                            </Text>
                            <View style={{ backgroundColor:'#721003', height:'100%', width:10, flex:1}}>

                            </View>
                        </View>
                        <View style={{marginTop:13,}}>
                            <Text style={{fontFamily:'Roboto-Regular', fontSize:14}}>
                            When the Emperor of China issues a decree that one man per family must serve<Text style={{color:'#456e28'}}>...Read More</Text>
                            </Text>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:10}}>
                        <Text        
                            style={{
                                borderRadius:5,
                                backgroundColor:'#4072BD',
                                fontFamily:'Roboto-Bold',
                                padding:13,
                                fontSize:12,
                                color:'#ffffff',
                                textAlign:'center'
                            
                            }}>WHERE TO WATCH</Text>
                            <Text        
                            style={{
                                flex:1,
                                borderRadius:5,
                                marginLeft:8,
                                backgroundColor:'#4072BD',
                                fontFamily:'Roboto-Bold',
                                paddingBottom:10,
                                fontSize:20,
                                color:'#ffffff',
                                textAlign:'center',
                                justifyContent:'center',
                                textAlignVertical:'center'
                            
                            }}>...</Text>
                        </View>
                        
                    </View>
                        
                </View>
                <View style={{margin:10}}>
                    <View style={{flexDirection:'row', flexWrap:'wrap', height:24, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <View style={{ backgroundColor:'#721003', height:'100%',width:20}}>

                        </View>
                        <Text style={{fontFamily:'Anton-Regular', fontSize:16,marginRight:5, marginLeft:5, marginTop:-5,}}>
                            CHATTER
                        </Text>
                        <View style={{ backgroundColor:'#721003', height:'100%', width:10, flex:1}}>

                        </View>
                    </View>
                    <View style={{ borderRadius:10, borderWidth:2, borderColor:'#ccc', padding: 10, flexDirection:'row', flexWrap:'wrap', marginTop:10}}>
                        <Text style={{flex:1}}>
                            Does Mulan make the Disney Soundtrack top 10?
                        </Text>
                        <View>
                            <Image
                                source={require('../images/ChatBubble1.png')}
                                style={{width:39, height:39}}
                            />
                            <Text style={{position: 'absolute', fontFamily:'Roboto-Bold', top:11,left:5,}}>
                                15K
                            </Text>
                        </View>
                        
                    </View>
                    <View style={{ borderRadius:10, borderWidth:2, borderColor:'#ccc', padding: 10, flexDirection:'row', flexWrap:'wrap', marginTop:10}}>
                        <Text style={{flex:1}}>
                        Disney’s release plans for Mulan; new normal?
                        </Text>
                        <View>
                            <Image
                                source={require('../images/ChatBubble1.png')}
                                style={{width:39, height:39}}
                            />
                            <Text style={{position: 'absolute', fontFamily:'Roboto-Bold', top:11,left:5,}}>
                                50K
                            </Text>
                        </View>
                        
                    </View>
                    <Text style={{textAlign:'right', color:'blue'}}>...Read More</Text>
                </View>
                <View style={{margin:10}}>
                    <View style={{flexDirection:'row', flexWrap:'wrap', height:24, width:'100%',justifyContent:'center', alignItems:'center'}}>
                        <View style={{ backgroundColor:'#721003', height:'100%',width:20}}>

                        </View>
                        <Text style={{fontFamily:'Anton-Regular', fontSize:16,marginRight:5, marginLeft:5, marginTop:-5,}}>
                            VIDEOS
                        </Text>
                        <View style={{ backgroundColor:'#721003', height:'100%', width:10, flex:1}}>

                        </View>
                    </View>
                </View>
                </ScrollView>
                

            </View>
            
        )
        

        
    }

    
}