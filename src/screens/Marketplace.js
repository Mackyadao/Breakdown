import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class Marketplace extends React.Component{
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
                <View style={{ width:'100%',paddingTop:5}}>
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
                            
                            <View style={{flex:1,flexDirection:'row', marginLeft:10, flexWrap:'wrap',}}>
                                <View
                                style={{alignSelf:'center',padding:12, backgroundColor:'#ddd',borderTopLeftRadius:10, borderBottomLeftRadius:10,}}>
                                    <Image
                                    source={require('../images/search1.png')}
                                    style={{width: 15,height:13,  }}
                                    />
                                </View>
                            <TextInput
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
                                borderBottomRightRadius:10,
                                borderTopRightRadius:10,
                                fontFamily:'Montserrat-SemiBold'
                            }}
                            placeholder="Search or create a Chat Gallery"
                            keyboardType="default"
                        /> 
                            </View>
                           
                        </View>
                        <View style={{flexDirection:'row', width:'90%', flexWrap:'wrap', justifyContent:'center',alignSelf:'center',marginTop:10,}}>
                        <TouchableOpacity
                        onPress={()=>navigate('Home')} 
                        style={{marginTop:25,marginRight:10}} >
                        <Image
                            source={require('../images/Arrow1.png')}
                            style={styles.NavBarIcons}
                        /> 
                        </TouchableOpacity>
                        <Text 
                        style={{fontFamily:'Anton-Regular', fontSize:42}}>Live Central</Text>
                        <Image
                            source={require('../images/live.png')}
                            style={{
                                height:30,
                                width:30,
                                alignSelf:'center',
                                marginTop:55,
                                marginLeft:10,
                                marginRight:10}}
                        /> 
                        <Image
                            source={require('../images/liveplus.png')}
                            style={styles.NavBarIcons}
                        /> 
                                
                        </View>
                        <View style={{flexDirection:'row', width:'100%', flexWrap:'wrap',alignSelf:'center',borderTopWidth:3,borderBottomWidth:3, borderColor:'#ddd', padding:20}}>
                            <View style={{flex:1, height:'100%'}}>
                                <Text  
                                onPress={()=>navigate('LiveCentral')}         
                                style={{
                                    fontFamily:'Anton-Regular',
                                    borderTopLeftRadius:10,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    borderTopRightRadius:10,
                                    backgroundColor:'#fff',
                                    paddingLeft:10,
                                    paddingRight:10,
                                    paddingTop:5,
                                    paddingBottom:5,
                                    color:'#333',
                                    textAlign:'center',
                                    marginLeft:20,
                                    marginRight:20,
                                    fontSize:20,
                                    borderWidth:3
                                }}>Who's Live?</Text>
                            </View>
                            <View style={{flex:1, height:'100%'}}>
                            <Text      
                                style={{
                                    fontFamily:'Anton-Regular',
                                    borderTopLeftRadius:10,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    borderTopRightRadius:10,
                                    backgroundColor:'#DD3606',
                                    paddingLeft:10,
                                    paddingRight:10,
                                    paddingTop:5,
                                    paddingBottom:5,
                                    color:'#ffffff',
                                    textAlign:'center',
                                    marginHorizontal:20,
                                    fontSize:20,
                                    borderWidth:3
                                }}>Marketplace</Text>
                            </View>
                            
                        </View>
                </View>                    
                <ScrollView
                style={{width:'100%', backgroundColor:'#ddd'}}>
                   <View style={{backgroundColor:'#fff',marginBottom:5}}>
                       <View style={{flexDirection:'row', width:'100%', flexWrap:'wrap',marginTop:10,}}>
                       <Text      
                                style={{
                                    fontFamily:'Anton-Regular',
                                    borderBottomRightRadius:10,
                                    borderTopRightRadius:10,
                                    backgroundColor:'#fff',
                                    paddingLeft:10,
                                    paddingRight:10,
                                    color:'#fff',
                                    backgroundColor:'#000',
                                    fontSize:24,
                                    borderWidth:3,
                                    width:'55%',
                                }}>Music</Text>
                        <Image
                            source={require('../images/filter.png')}
                            style={{width:30, height:30, position:'absolute', right:0, top:'20%'}}
                        /> 
                       </View>
                       <View style={{flexDirection:'row', flexWrap:'wrap', alignSelf:'center'}}>
                           <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>
                           <Image
                            source={require('../images/djgreyscale.png')}
                            style={{width:171, height:209,}}
                            /> 
                           </TouchableOpacity>
                           <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}
                           onPress={()=>navigate('LiveViewPaid')}  >
                           <Image
                            source={require('../images/blackkeys.png')}
                            style={{width:171, height:209,}}
                            /> 
                           </TouchableOpacity>
                       </View>
                   </View>

                   <View style={{backgroundColor:'#fff',marginBottom:5}}>
                       <View style={{flexDirection:'row', width:'100%', flexWrap:'wrap',marginTop:10,}}>
                       <Text      
                                style={{
                                    fontFamily:'Anton-Regular',
                                    borderBottomRightRadius:10,
                                    borderTopRightRadius:10,
                                    backgroundColor:'#fff',
                                    paddingLeft:10,
                                    paddingRight:10,
                                    color:'#fff',
                                    backgroundColor:'#000',
                                    fontSize:24,
                                    borderWidth:3,
                                    width:'55%',
                                }}>Photography</Text>
                        <Image
                            source={require('../images/filter.png')}
                            style={{width:30, height:30, position:'absolute', right:0, top:'20%'}}
                        /> 
                       </View>
                       <View style={{flexDirection:'row', flexWrap:'wrap', alignSelf:'center'}}>
                           <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>
                           <Image
                            source={require('../images/colorpop.png')}
                            style={{width:171, height:209,}}
                            /> 
                           </TouchableOpacity>
                           <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>
                           <Image
                            source={require('../images/touchup.png')}
                            style={{width:171, height:209,}}
                            /> 
                           </TouchableOpacity>
                       </View>
                   </View>
                    
                </ScrollView>
                <View style={{width:'100%', height:43,flexWrap:'wrap',flexDirection:'row',}}>
                    <TouchableOpacity style={styles.NavBarTouchOpa}
                        onPress={()=>navigate('Home')}  >
                         <Image
                            source={require('../images/home.png')}
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