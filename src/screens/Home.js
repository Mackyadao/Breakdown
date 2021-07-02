import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import HomeFeed from './HomeFeed';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class Home extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        
          
        const { search } = this.state;
        const {navigate} = this.props.navigation;

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
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <View style={{ width:'100%', paddingBottom:20,paddingTop:5}}>
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 37,height:29,marginTop: 4, marginLeft: 12}}
                    />
                    <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:10 }}>
                            <TouchableOpacity 
                                style={styles.ProfileBtnContainer}
                                onPress={()=>navigate('Profile')} >
                                <Image
                                source={require('../images/Ellipse59.png')}
                                style={styles.ProfileBtn}
                                />
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                            onPress={()=>navigate('SearchPage')} 
                            style={{flex:1,flexDirection:'row', marginLeft:10, flexWrap:'wrap',}}>
                                <View
                                style={{alignSelf:'center',padding:12, backgroundColor:'#ddd',borderTopLeftRadius:10, borderBottomLeftRadius:10,}}>
                                    <Image
                                    source={require('../images/search1.png')}
                                    style={{width: 15,height:13,  }}
                                    />
                                </View>
                            <Text
                            
                            style={{
                                flex:1,
                                borderWidth:2,
                                borderColor:'#dddddd',
                                paddingTop:1,
                                paddingBottom:1,
                                paddingLeft:10,
                                paddingRight:10,
                                marginRight:10,
                                backgroundColor:'#ddd',
                                color:'#888',
                                borderBottomRightRadius:10,
                                borderTopRightRadius:10,
                                fontFamily:'Montserrat-SemiBold',
                                textAlign:'center',
                                textAlignVertical:'center'
                            }}
                            
                        >Search or create a Chat Gallery</Text> 
                            </TouchableOpacity>
                           
                        </View>
                        <View style={{flexDirection:'row' ,marginHorizontal:10, flexWrap:'wrap',alignSelf:'center',marginTop:10,}}>
                        <View style={{flexWrap:'wrap',flex:1,flexDirection:'row',  borderWidth:2,padding:3, margin:5, justifyContent:'center', backgroundColor:'#fff', borderColor:'#848080', borderRadius:5}}>
                                    <Image
                                    source={require('../images/conversation1.png')}
                                    style={{width: 15,height:15, margin:2, }}
                                    />
                                    <View style={{ alignSelf:'baseline'}}>
                                    <Text style={{fontSize:11}}>Chat Stream</Text>
                                    </View>
                                </View>

                                <TouchableOpacity 
                                    onPress={()=>navigate('LiveCentral')} 
                                    style={{flexWrap:'wrap',flex:1,flexDirection:'row',  borderWidth:2,padding:3, margin:5, justifyContent:'center', backgroundColor:'#fff', borderColor:'#848080', borderRadius:5}}>
                                        <Image
                                        source={require('../images/live.png')}
                                        style={{width: 15,height:15, margin:2, }}
                                        />
                                        <View style={{ alignSelf:'baseline'}}>
                                        <Text style={{fontSize:11}}>Live Central</Text>
                                        </View>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                onPress={()=>navigate('WhatsTrending')} 
                                style={{flexWrap:'wrap',flex:1,flexDirection:'row',borderWidth:2,padding:3, margin:5, justifyContent:'center', backgroundColor:'#fff', borderColor:'#848080', borderRadius:5}}>
                                    <Image
                                    source={require('../images/Trending.png')}
                                    style={{width: 9.1,height:13.26, margin:2, }}
                                    />
                                    <View style={{ alignSelf:'baseline',flex:1,}}>
                                    <Text style={{fontSize:11,}}>What's Trending</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                </View>                    
                <HomeFeed/>
                <View style={{width:'100%', height:43,flexWrap:'wrap',flexDirection:'row',}}>
                    <TouchableOpacity style={styles.NavBarTouchOpa}>
                         <Image
                            source={require('../images/homeselected.png')}
                            style={styles.NavBarIcons}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavBarTouchOpa}
                    onPress={()=>navigate('NotificationPage')}  >
                         <Image
                            source={require('../images/notificationBell.png')}
                            style={styles.NavBarIcons}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavBarTouchOpa}>
                         <Image
                            source={require('../images/plus2.png')}
                            style={styles.NavBarIcons}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavBarTouchOpa}>
                         <Image
                            source={require('../images/menu3.png')}
                            style={styles.NavBarIcons}
                        /> 
                    </TouchableOpacity>
                </View>

            </View>

        )

        
    }

    
}