import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import ProfileFeed from './ProfileFeed';


export default class Profile extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        
          
        const { search } = this.state;
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
            }

          });


        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <View style={{ width:'100%',paddingTop:5,}}>
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 37,height:29,marginTop: 4, marginLeft: 12}}
                    />

                    <View style={{flexDirection:'row', flexWrap:'wrap',marginTop:10, }}>
                        <View style={{position:'relative',marginLeft: 12,flex:1, }}>
                            <View style={{alignSelf:'center', width:78, height:80}}>
                                <Image
                                    source={require('../images/Ellipse57.png')}
                                    style={{width: 74,height:74, position:'absolute'}}
                                    />

                                <Image
                                    source={require('../images/Ellipse69.png')}
                                    style={{width: 22,height:22, position:'absolute', right:0, bottom:0,}}
                                    />
                                <Image
                                    source={require('../images/camera1.png')}
                                    style={{width: 11,height:10, position:'absolute', right:6, bottom:6,}}
                                    />
                            </View >
                            <View style={{flexDirection:'row', flexWrap:'wrap', alignSelf:'center', justifyContent:'center',}}>
                                <Image
                                    source={require('../images/Polygon8.png')}
                                    style={{width: 20,height:14, alignSelf:'center'}}
                                    />

                                <Text style={{marginLeft:6,alignSelf:'center', fontFamily:'Montserrat-SemiBold'}}>@tbastudios V</Text>
                            </View>
                            
                        </View>
                        <View style={{position:'relative',marginTop:70,}}>
                            <Image
                                source={require('../images/calendar2.png')}
                                style={{width: 32,height:32,}}
                                />
                        </View>
                        

                        <View style={{position:'relative',flex:1, }}>
                            <View style={{alignSelf:'center', width:78, height:80}}>
                                <Image
                                    source={require('../images/live.png')}
                                    style={{width: 74,height:74, position:'absolute'}}
                                    />

                                <Image
                                    source={require('../images/Ellipse69.png')}
                                    style={{width: 22,height:22, position:'absolute', right:0, bottom:0,}}
                                    />
                                <Image
                                    source={require('../images/camera1.png')}
                                    style={{width: 11,height:10, position:'absolute', right:6, bottom:6,}}
                                    />
                            </View >
                            <View style={{ alignSelf:'center', justifyContent:'center'}}>
                                <Text style={{marginLeft:6,alignSelf:'center', fontFamily:'Pattaya-Regular', color:'#DD3606', fontSize:14}}>Time until event:</Text>
                                <Text style={{marginLeft:6,alignSelf:'center', fontFamily:'Montserrat-SemiBold'}}>6:00</Text>
                                
                            </View>
                            
                        </View>
                            
                            
                           
                    </View>

                    <View style={{flexDirection:'row', flexWrap:'wrap', width:"100%"}}>
                        <View style={{alignSelf:'center', flex:1}}>
                            <Text style={{fontFamily:'Montserrat-SemiBold', textAlign:'center'}}>
                                20
                            </Text>
                            <Text style={{textAlign:'center'}}>
                                Galleries
                            </Text>
                        </View>

                        <View style={{alignSelf:'center', flex:1, marginTop:20}}>
                            <Text style={{fontFamily:'Montserrat-SemiBold', textAlign:'center'}}>
                                250
                            </Text>
                            <Text style={{textAlign:'center'}}>
                                Following
                            </Text>
                        </View>
                    </View>

                        <View style={{flexDirection:'row' ,marginHorizontal:10, flexWrap:'wrap',alignSelf:'center',marginTop:10,}}>
                                <TouchableOpacity
                                onPress={()=>navigate('Home')} 
                                 style={{flexWrap:'wrap',flex:1,flexDirection:'row', borderWidth:2,padding:3, margin:5, justifyContent:'center', backgroundColor:'#fff', borderColor:'#848080', borderRadius:5}}>
                                    <Image
                                    source={require('../images/conversation1.png')}
                                    style={{width: 15,height:15, margin:2, }}
                                    />
                                    <View style={{ alignSelf:'baseline'}}>
                                        <Text style={{fontSize:11}}>Chat Stream</Text>
                                    </View>
                                </TouchableOpacity>

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

                            <View style={{flexDirection:'row' ,marginHorizontal:10, flexWrap:'wrap',alignSelf:'center',marginTop:10, width:'100%',borderTopWidth:3, borderColor:'#ccc'}}>
                                <View>
                                    <Text>test item</Text>
                                </View>
                            </View>
                </View>     
                            
                <ProfileFeed/>
                <View style={{width:'100%', height:43,flexWrap:'wrap',flexDirection:'row',}}>
                    <TouchableOpacity 
                    onPress={()=>navigate('Home')}
                    style={styles.NavBarTouchOpa}>
                         <Image
                            source={require('../images/home.png')}
                            style={styles.NavBarIcons}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavBarTouchOpa}>
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